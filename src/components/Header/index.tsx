import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import { HeaderContainer, Title, HeaderNav, Logo } from './styles'
import logoImg from '../../assets/images/logo.svg'

type Props = {
  isHome?: boolean
}

const Header = ({ isHome = true }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
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
            <span onClick={openCart} style={{ cursor: 'pointer' }}>
              {items.length} produto(s) no carrinho
            </span>
          </HeaderNav>
        )}
      </div>
    </HeaderContainer>
  )
}

export default Header
