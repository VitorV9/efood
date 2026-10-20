import { FooterContainer, SocialLinks, Logo } from './styles'
import logoImg from '../../assets/images/logo.svg'
import instagramIcon from '../../assets/images/Group.svg'
import facebookIcon from '../../assets/images/Vector.svg'
import twitterIcon from '../../assets/images/twitter-2-svgrepo-com 1.svg'

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <Logo src={logoImg} alt="efood" />
      <SocialLinks>
        <a href="#instagram" target="_blank" rel="noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="#facebook" target="_blank" rel="noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="#twitter" target="_blank" rel="noreferrer">
          <img src={twitterIcon} alt="Twitter" />
        </a>
      </SocialLinks>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </FooterContainer>
)

export default Footer
