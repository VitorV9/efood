import styled from 'styled-components'
import { cores } from '../../styles'
import fundoTalheres from '../../assets/images/fundo_garfos.svg'

export const HeaderContainer = styled.header<{ $isHome: boolean }>`
  background-color: ${cores.fundoSecundario};
  /* Aplica a imagem de fundo repetida em mosaico */
  background-image: url(${fundoTalheres});
  background-repeat: repeat;
  background-size: auto;

  padding: ${(props) => (props.$isHome ? '40px 0' : '40px 0 64px')};
  text-align: center;
  position: relative;
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  object-fit: contain;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  color: ${cores.vermelho};
  max-width: 580px;
  margin: 138px auto 0;
`

export const HeaderNav = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  font-size: 18px;
  font-weight: 900;
  color: ${cores.vermelho};

  a {
    color: ${cores.vermelho};
    text-decoration: none;
    text-align: left;
  }

  span {
    text-align: right;
  }
`
