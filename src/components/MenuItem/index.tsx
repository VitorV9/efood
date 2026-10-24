import { Card } from './styles'

type Props = {
  foto: string
  nome: string
  descricao: string
  onClick: () => void
}

const MenuItem = ({ foto, nome, descricao, onClick }: Props) => {
  const getDescricao = (texto: string) => {
    if (texto.length > 130) {
      return texto.slice(0, 127) + '...'
    }
    return texto
  }

  return (
    <Card>
      <img src={foto} alt={nome} />
      <h3>{nome}</h3>
      <p>{getDescricao(descricao)}</p>
      <button onClick={onClick}>Mais detalhes</button>
    </Card>
  )
}

export default MenuItem
