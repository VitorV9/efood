import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import MenuItem from '../../components/MenuItem'

import { Modal, ModalContent, MenuContainer } from './styles'

import fecharImg from '../../assets/images/fechar.png'

export type Prato = {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Prato[]
}

const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante>()

  const [modalEstaAberta, setModalEstaAberta] = useState(false)
  const [pratoSelecionado, setPratoSelecionado] = useState<Prato | null>(null)

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
      .catch((err) => console.error('Erro na API:', err))
  }, [id])

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const abrirModal = (prato: Prato) => {
    setPratoSelecionado(prato)
    setModalEstaAberta(true)
  }

  const fecharModal = () => {
    setModalEstaAberta(false)
    setPratoSelecionado(null)
  }

  if (!restaurante) {
    return <h3>Carregando cardápio...</h3>
  }

  return (
    <>
      <Header isHome={false} />
      <Banner restaurante={restaurante} />

      <div className="container">
        <MenuContainer>
          {restaurante.cardapio.map((prato) => (
            <MenuItem
              key={prato.id}
              foto={prato.foto}
              nome={prato.nome}
              descricao={prato.descricao}
              onClick={() => abrirModal(prato)}
            />
          ))}
        </MenuContainer>
      </div>
      <Modal className={modalEstaAberta ? 'visivel' : ''}>
        {pratoSelecionado && (
          <ModalContent className="container">
            <img
              src={fecharImg}
              alt="Ícone de fechar"
              className="close-icon"
              onClick={fecharModal}
            />
            <img
              src={pratoSelecionado.foto}
              alt={pratoSelecionado.nome}
              className="foto-prato"
            />
            <div className="infos">
              <h4>{pratoSelecionado.nome}</h4>
              <p>{pratoSelecionado.descricao}</p>
              <p>Serve: {pratoSelecionado.porcao}</p>
              <button>
                Adicionar ao carrinho - {formataPreco(pratoSelecionado.preco)}
              </button>
            </div>
          </ModalContent>
        )}
        <div className="overlay" onClick={fecharModal}></div>
      </Modal>
    </>
  )
}

export default Perfil
