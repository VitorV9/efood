import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  position: relative;
  display: flex;
  flex-direction: column;
`

export const Capa = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
  display: block;
`

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.span`
  background-color: ${cores.vermelho};
  color: ${cores.fundoSecundario};
  padding: 6px 4px;
  font-size: 12px;
  font-weight: 700;
  display: inline-block;
`

export const Content = styled.div`
  padding: 8px;
  border: 1px solid ${cores.vermelho};
  border-top: none;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h3 {
    font-size: 18px;
    font-weight: 700;
    color: ${cores.vermelho};
  }
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 700;
  color: ${cores.vermelho};

  span {
    color: ${cores.amarelo};
    font-size: 20px;
    line-height: 1;
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.vermelho};
  margin-bottom: 16px;
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.vermelho};
  color: ${cores.fundoSecundario};
  border: none;
  padding: 4px 6px;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  display: inline-block;
  align-self: flex-start;
`
