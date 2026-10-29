import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { CartContainer, Overlay, Sidebar, CartItem, Prices } from './styles'
import lixeira from '../../assets/images/lixeira.png'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
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

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
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

        <button type="button" className="checkout-btn">
          Continuar com a entrega
        </button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
