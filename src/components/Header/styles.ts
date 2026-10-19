import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainer = styled.header<{ $isHome: boolean }>`
  background-color: ${cores.fundoSecundario};
  padding: ${(props) => (props.$isHome ? '64px 0' : '24px 0')};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* Simula o background com textura do layout */
  background-image: url('https://placehold.co/1920x384/FFEBD9/FFEBD9');
`

export const HeaderNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  font-weight: bold;
  font-size: 18px;

  a {
    color: ${cores.vermelho};
    text-decoration: none;
  }
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  margin-top: 138px;
  max-width: 540px;
`
