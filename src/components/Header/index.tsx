import { Link } from 'react-router-dom'
import { HeaderContainer, Title, HeaderNav } from './styles'

type Props = {
  isHome?: boolean
}

const Header = ({ isHome = false }: Props) => (
  <HeaderContainer $isHome={isHome}>
    <div className="container">
      {isHome ? (
        <>
          <img
            src="https://placehold.co/125x58/E66767/FFF?text=efood"
            alt="efood"
          />
          <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
        </>
      ) : (
        <HeaderNav>
          <Link to="/">Restaurantes</Link>
          <img
            src="https://placehold.co/125x58/E66767/FFF?text=efood"
            alt="efood"
          />
          <span>0 produto(s) no carrinho</span>
        </HeaderNav>
      )}
    </div>
  </HeaderContainer>
)

export default Header
