import styled from 'styled-components'
import { cores } from '../../styles'

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
  align-items: flex-end;
`

export const InputGroup = styled.div`
  flex: auto;
  margin-bottom: 8px;

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
    color: ${cores.fundoSecundario};
    font-weight: bold;
  }

  input {
    background-color: ${cores.fundoSecundario};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${cores.fundoSecundario};
    width: 100%;
    color: #4b4b4b;
    font-weight: bold;
  }
`

export const SubmitButton = styled.button`
  background-color: ${cores.fundoSecundario};
  color: ${cores.vermelho};
  font-weight: bold;
  font-size: 14px;
  border: none;
  width: 100%;
  padding: 4px;
  margin-top: 16px;
  cursor: pointer;
`

export const BackButton = styled.button`
  background-color: ${cores.fundoSecundario};
  color: ${cores.vermelho};
  font-weight: bold;
  font-size: 14px;
  border: none;
  width: 100%;
  padding: 4px;
  margin-top: 8px;
  cursor: pointer;
`
