import styled from 'styled-components'
import Header from '../../components/Header'
import RestaurantCard from '../../components/RestaurantCard'

import massaImg from '../../assets/images/massa.png'
import sushiImg from '../../assets/images/sushi.png'

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin-top: 80px;
  margin-bottom: 120px;
`

const restaurantes = [
  {
    id: 1,
    title: 'Hioki Sushi',
    rating: '4.9',
    tags: ['Destaque da semana', 'Japonesa'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.',
    image: sushiImg
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    tags: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: massaImg
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    tags: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.',
    image: massaImg
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    tags: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.',
    image: massaImg
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    tags: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.',
    image: massaImg
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    tags: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.',
    image: massaImg
  }
]

const Home = () => (
  <>
    <Header isHome={true} />
    <div className="container">
      <ListContainer>
        {restaurantes.map((item) => (
          <RestaurantCard
            key={item.id}
            title={item.title}
            rating={item.rating}
            tags={item.tags}
            description={item.description}
            image={item.image}
          />
        ))}
      </ListContainer>
    </div>
  </>
)

export default Home
