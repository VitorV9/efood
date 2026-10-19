import { FooterContainer } from './styles'

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <img
        src="https://placehold.co/125x58/E66767/FFF?text=efood"
        alt="efood"
      />
      <div>
        {/* Simulação das redes sociais */}
        <img
          src="https://placehold.co/24x24/E66767/FFF?text=Ig"
          alt="Instagram"
          style={{ margin: '0 8px' }}
        />
        <img
          src="https://placehold.co/24x24/E66767/FFF?text=Fb"
          alt="Facebook"
          style={{ margin: '0 8px' }}
        />
        <img
          src="https://placehold.co/24x24/E66767/FFF?text=Tw"
          alt="Twitter"
          style={{ margin: '0 8px' }}
        />
      </div>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </FooterContainer>
)

export default Footer
