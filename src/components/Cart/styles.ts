import styled from 'styled-components'
import { cores } from '../../styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 10;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;

  button.checkout-btn {
    width: 100%;
    background-color: ${cores.fundoSecundario};
    color: ${cores.vermelho};
    border: none;
    padding: 4px;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    margin-top: 16px;
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.fundoSecundario};
  color: ${cores.vermelho};
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  > img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  div {
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 18px;
      font-weight: 900;
      margin-bottom: 16px;
    }

    span {
      font-size: 14px;
      line-height: 22px;
    }
  }

  button {
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 14px;
  color: ${cores.fundoSecundario};
  margin-top: 40px;
`
