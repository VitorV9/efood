import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.textLight};
  padding: 8px;
  border-radius: 8px;

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 16px;
    font-weight: 900;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 8px;
  }

  button {
    width: 100%;
    background-color: ${cores.textLight};
    color: ${cores.vermelho};
    border: none;
    padding: 4px 0;
    font-weight: 900;
    cursor: pointer;
  }
`
