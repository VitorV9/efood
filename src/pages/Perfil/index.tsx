import Header from '../../components/Header'
import Banner from '../../components/Banner'
import MenuItem from '../../components/MenuItem'
import styled from 'styled-components'

const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 56px;
`

const Perfil = () => (
  <>
    <Header isHome={false} />
    <Banner />
    <div className="container">
      <MenuContainer>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </MenuContainer>
    </div>
  </>
)

export default Perfil
