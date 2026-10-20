import styled from 'styled-components'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import MenuItem from '../../components/MenuItem'

import pizzaImg from '../../assets/images/pizza.png'
import massaImg from '../../assets/images/massa.png'
import sushiImg from '../../assets/images/sushi.png'

const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 56px;
  margin-bottom: 120px;
`

const Perfil = () => (
  <>
    <Header isHome={false} />
    <Banner />
    <div className="container">
      <MenuContainer>
        <MenuItem
          image={pizzaImg}
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        />
        <MenuItem
          image={massaImg}
          title="Spaghetti à Carbonara"
          description="Massa fresca com molho cremoso, pedaços de bacon crocante, queijo parmesão e pimenta-do-reino."
        />
        <MenuItem
          image={sushiImg}
          title="Combinado Especial"
          description="Seleção do chef com sashimis frescos, niguiris variados e hossomakis crocantes."
        />
        <MenuItem
          image={pizzaImg}
          title="Pizza Marguerita"
          description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite."
        />
        <MenuItem
          image={massaImg}
          title="Spaghetti à Carbonara"
          description="Massa fresca com molho cremoso, pedaços de bacon crocante e queijo parmesão."
        />
        <MenuItem
          image={sushiImg}
          title="Combinado Especial"
          description="Seleção do chef com sashimis frescos, niguiris variados e hossomakis."
        />
      </MenuContainer>
    </div>
  </>
)

export default Perfil
