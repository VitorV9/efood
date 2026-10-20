import { Link } from 'react-router-dom'
import { HeaderContainer, Title, HeaderNav, Logo } from './styles'
import logoImg from '../../assets/images/logo.svg'

type Props = {
  isHome?: boolean
}

const Header = ({ isHome = true }: Props) => (
  <HeaderContainer $isHome={isHome}>
    <div className="container">
      {isHome ? (
        <>
          <Logo src={logoImg} alt="efood" />
          <Title>
            Viva experiências gastronômicas
            <br />
            no conforto da sua casa
          </Title>
        </>
      ) : (
        <HeaderNav>
          <Link to="/">Restaurantes</Link>
          <Logo src={logoImg} alt="efood" />
          <span>0 produto(s) no carrinho</span>
        </HeaderNav>
      )}
    </div>
  </HeaderContainer>
)

export default Header
