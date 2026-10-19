import Header from '../../components/Header'
import RestaurantCard from '../../components/RestaurantCard'
import styled from 'styled-components'

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin-top: 80px;
`

const Home = () => (
  <>
    <Header isHome={true} />
    <div className="container">
      <ListContainer>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </ListContainer>
    </div>
  </>
)

export default Home
