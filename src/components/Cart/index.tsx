import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import { RootReducer } from '../../store'
import { close, remove, clear } from '../../store/reducers/cart'
import { usePurchaseEfoodMutation } from '../../services/api'

import { CartContainer, Overlay, Sidebar, CartItem, Prices } from './styles'
import { Row, InputGroup, SubmitButton, BackButton } from './checkoutStyles'
import lixeira from '../../assets/images/lixeira.png'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [purchase, { data, isSuccess }] = usePurchaseEfoodMutation()

  const [step, setStep] = useState('cart') // cart | delivery | payment | success

  const closeCart = () => {
    dispatch(close())
    setTimeout(() => {
      setStep('cart')
      form.resetForm()
    }, 300)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const valorTotal = items.reduce((acumulador, itemAtual) => {
    return (acumulador += itemAtual.preco)
  }, 0)

  const form = useFormik({
    initialValues: {
      receiver: '',
      addressDescription: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string().required('Campo obrigatório'),
      addressDescription: Yup.string().required('Campo obrigatório'),
      city: Yup.string().required('Campo obrigatório'),
      zipCode: Yup.string()
        .min(9, 'CEP inválido')
        .required('Campo obrigatório'),
      number: Yup.number().required('Campo obrigatório'),
      cardName: Yup.string().when('step', {
        is: 'payment',
        then: (schema) => schema.required('Campo obrigatório')
      }),
      cardNumber: Yup.string().when('step', {
        is: 'payment',
        then: (schema) => schema.required('Campo obrigatório')
      }),
      cardCode: Yup.string().when('step', {
        is: 'payment',
        then: (schema) => schema.required('Campo obrigatório')
      }),
      expiresMonth: Yup.string().when('step', {
        is: 'payment',
        then: (schema) => schema.required('Campo obrigatório')
      }),
      expiresYear: Yup.string().when('step', {
        is: 'payment',
        then: (schema) => schema.required('Campo obrigatório')
      })
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({ id: item.id, price: item.preco })),
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.addressDescription,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const goToPayment = () => {
    form.validateForm().then((errors) => {
      const deliveryFields = [
        'receiver',
        'addressDescription',
        'city',
        'zipCode',
        'number'
      ]
      const hasErrors = deliveryFields.some(
        (field) => errors[field as keyof typeof errors]
      )

      if (!hasErrors) {
        setStep('payment')
      } else {
        deliveryFields.forEach((field) => form.setFieldTouched(field, true))
      }
    })
  }

  if (isSuccess && step !== 'success') {
    setStep('success')
    dispatch(clear())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {step === 'cart' && (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formataPreco(item.preco)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button">
                    <img src={lixeira} alt="Remover" />
                  </button>
                </CartItem>
              ))}
            </ul>
            <Prices>
              <p>Valor total</p>
              <span>{formataPreco(valorTotal)}</span>
            </Prices>
            <SubmitButton type="button" onClick={() => setStep('delivery')}>
              Continuar com a entrega
            </SubmitButton>
          </>
        )}

        {step === 'delivery' && (
          <form>
            <h3
              style={{
                color: '#FFEBD9',
                marginBottom: '16px',
                fontWeight: 'bold'
              }}
            >
              Entrega
            </h3>

            <InputGroup>
              <label htmlFor="receiver">Quem irá receber</label>
              <input
                type="text"
                id="receiver"
                name="receiver"
                value={form.values.receiver}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputGroup>

            <InputGroup>
              <label htmlFor="addressDescription">Endereço</label>
              <input
                type="text"
                id="addressDescription"
                name="addressDescription"
                value={form.values.addressDescription}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputGroup>

            <InputGroup>
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                id="city"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputGroup>

            <Row>
              <InputGroup>
                <label htmlFor="zipCode">CEP</label>
                <InputMask
                  mask="99999-999"
                  id="zipCode"
                  name="zipCode"
                  value={form.values.zipCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="number">Número</label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  value={form.values.number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </InputGroup>
            </Row>

            <InputGroup>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                type="text"
                id="complement"
                name="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputGroup>

            <SubmitButton type="button" onClick={goToPayment}>
              Continuar com o pagamento
            </SubmitButton>
            <BackButton type="button" onClick={() => setStep('cart')}>
              Voltar para o carrinho
            </BackButton>
          </form>
        )}

        {step === 'payment' && (
          <form onSubmit={form.handleSubmit}>
            <h3
              style={{
                color: '#FFEBD9',
                marginBottom: '16px',
                fontWeight: 'bold'
              }}
            >
              Pagamento - Valor a pagar {formataPreco(valorTotal)}
            </h3>

            <InputGroup>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={form.values.cardName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputGroup>

            <Row>
              <InputGroup>
                <label htmlFor="cardNumber">Número do cartão</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </InputGroup>
              <InputGroup style={{ maxWidth: '80px' }}>
                <label htmlFor="cardCode">CVV</label>
                <input
                  type="text"
                  id="cardCode"
                  name="cardCode"
                  maxLength={3}
                  value={form.values.cardCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </InputGroup>
            </Row>

            <Row>
              <InputGroup>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <input
                  type="number"
                  id="expiresMonth"
                  name="expiresMonth"
                  value={form.values.expiresMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <input
                  type="number"
                  id="expiresYear"
                  name="expiresYear"
                  value={form.values.expiresYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </InputGroup>
            </Row>

            <SubmitButton type="submit">Finalizar pagamento</SubmitButton>
            <BackButton type="button" onClick={() => setStep('delivery')}>
              Voltar para a edição de endereço
            </BackButton>
          </form>
        )}

        {step === 'success' && data && (
          <div>
            <h3
              style={{
                color: '#FFEBD9',
                marginBottom: '16px',
                fontWeight: 'bold'
              }}
            >
              Pedido realizado - {data.orderId}
            </h3>
            <p
              style={{
                color: '#FFEBD9',
                fontSize: '14px',
                lineHeight: '22px',
                marginBottom: '16px'
              }}
            >
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p
              style={{
                color: '#FFEBD9',
                fontSize: '14px',
                lineHeight: '22px',
                marginBottom: '16px'
              }}
            >
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p
              style={{
                color: '#FFEBD9',
                fontSize: '14px',
                lineHeight: '22px',
                marginBottom: '16px'
              }}
            >
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p
              style={{
                color: '#FFEBD9',
                fontSize: '14px',
                lineHeight: '22px',
                marginBottom: '16px'
              }}
            >
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <SubmitButton type="button" onClick={closeCart}>
              Concluir
            </SubmitButton>
          </div>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
