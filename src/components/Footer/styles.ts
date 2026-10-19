import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.fundoSecundario};
  padding: 40px 0;
  margin-top: 120px;
  text-align: center;
  font-size: 10px;

  img {
    margin-bottom: 32px;
  }

  p {
    max-width: 480px;
    margin: 0 auto;
    margin-top: 80px;
  }
`
