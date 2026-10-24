import styled from 'styled-components'
import { cores } from '../../styles'
import { Restaurante } from '../../pages/Perfil'

const Imagem = styled.div`
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

const Content = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 0 32px;
  color: ${cores.branco};

  h2 {
    font-size: 32px;
    font-weight: 100;
  }

  h1 {
    font-size: 32px;
    font-weight: 900;
  }
`

type Props = {
  restaurante: Restaurante
}

const Banner = ({ restaurante }: Props) => (
  <Imagem style={{ backgroundImage: `url(${restaurante.capa})` }}>
    <div className="container" style={{ height: '100%' }}>
      <Content>
        <h2>{restaurante.tipo}</h2>
        <h1>{restaurante.titulo}</h1>
      </Content>
    </div>
  </Imagem>
)

export default Banner
