import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  border: 1px solid ${cores.vermelho};
  position: relative;

  > img {
    width: 100%;
    height: 217px;
    object-fit: cover;
    display: block;
  }
`

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.textLight};
  padding: 6px 10px;
  font-size: 12px;
  font-weight: bold;
`

export const Content = styled.div`
  padding: 8px;
`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const Button = styled.button`
  background-color: ${cores.vermelho};
  color: ${cores.textLight};
  border: none;
  padding: 4px 6px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`
