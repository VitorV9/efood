import {
  Card,
  Capa,
  Content,
  Description,
  HeaderCard,
  Rating,
  TagsContainer,
  Tag,
  ButtonLink
} from './styles'

type Props = {
  title: string
  rating: string
  description: string
  tags: string[]
  image: string
}

const RestaurantCard = ({ title, rating, description, tags, image }: Props) => (
  <Card>
    <Capa src={image} alt={title} />
    <TagsContainer>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </TagsContainer>
    <Content>
      <div>
        <HeaderCard>
          <h3>{title}</h3>
          <Rating>
            {rating} <span>★</span>
          </Rating>
        </HeaderCard>
        <Description>{description}</Description>
      </div>
      <ButtonLink to="/perfil">Saiba mais</ButtonLink>
    </Content>
  </Card>
)

export default RestaurantCard
