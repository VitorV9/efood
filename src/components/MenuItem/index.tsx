import { Card } from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const MenuItem = ({ image, title, description }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <button>Adicionar ao carrinho</button>
  </Card>
)

export default MenuItem
