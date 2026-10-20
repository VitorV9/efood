import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.fundoSecundario};
  padding: 40px 0;
  text-align: center;

  p {
    max-width: 480px;
    margin: 80px auto 0;
    font-size: 10px;
    line-height: 12px;
    color: ${cores.vermelho};
  }
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  object-fit: contain;
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`
