import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.fundoSecundario};
  padding: 8px;

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
    display: block;
  }

  h3 {
    font-size: 16px;
    font-weight: 900;
    margin: 8px 0;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 8px;
  }

  button {
    width: 100%;
    background-color: ${cores.fundoSecundario};
    color: ${cores.vermelho};
    border: none;
    padding: 4px 0;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
  }
`
