import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import RestaurantCard from '../../components/RestaurantCard'
import { Restaurante } from '../Perfil'

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  margin-top: 80px;
  margin-bottom: 120px;
`

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
      .catch((err) => console.error('Erro na API:', err))
  }, [])

  return (
    <>
      <Header isHome={true} />
      <div className="container">
        <ListContainer>
          {restaurantes.map((item) => (
            <RestaurantCard
              key={item.id}
              id={item.id}
              title={item.titulo}
              rating={item.avaliacao.toString()}
              tags={
                item.destacado ? ['Destaque da semana', item.tipo] : [item.tipo]
              }
              description={item.descricao}
              image={item.capa}
            />
          ))}
        </ListContainer>
      </div>
    </>
  )
}

export default Home
