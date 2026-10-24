import styled from 'styled-components'
import { cores } from '../../styles'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  background-color: ${cores.vermelho};
  color: ${cores.bege};
  padding: 32px;
  display: flex;
  gap: 24px;
  position: relative;
  z-index: 1;

  .foto-prato {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  .infos {
    display: flex;
    flex-direction: column;

    h4 {
      font-size: 21px;
      font-weight: 900;
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 16px;
    }

    button {
      background-color: #ffebd9;
      color: #e66767;
      border: none;
      padding: 4px 8px;
      font-weight: 900;
      font-size: 14px;
      cursor: pointer;
      width: fit-content;
      margin-top: 16px;
    }
  }

  .close-icon {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    width: 16px;
    height: 16px;
  }
`

export const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 56px;
  margin-bottom: 120px;
`
