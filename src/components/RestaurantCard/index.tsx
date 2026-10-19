import {
  Card,
  Content,
  Description,
  HeaderCard,
  Rating,
  TagsContainer,
  Tag,
  Button
} from './styles'

const RestaurantCard = () => (
  <Card>
    <img
      src="https://placehold.co/472x217/CCC/FFF?text=Comida"
      alt="Restaurante"
    />
    <TagsContainer>
      <Tag>Destaque da semana</Tag>
      <Tag>Japonesa</Tag>
    </TagsContainer>
    <Content>
      <HeaderCard>
        <h3>Hioki Sushi</h3>
        <Rating>
          4.9 <span style={{ color: '#FFB930' }}>★</span>
        </Rating>
      </HeaderCard>
      <Description>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes.
      </Description>
      <Button>Saiba mais</Button>
    </Content>
  </Card>
)

export default RestaurantCard
