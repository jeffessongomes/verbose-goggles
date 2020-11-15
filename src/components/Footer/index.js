import { Container, Mobile } from './styles';
import { FaYoutube, FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

import logotipo from '../../assets/img/logotipo-2.png';


const Footer = () => {
 return(
    <Mobile>
      <Container>
        <div>
            <img src={logotipo} alt="Logotipo da RITS"/>
            <ul>
              <li>
                <FaFacebookF size={20} color="#808080" />
              </li>
              
              <li>
                <FaTwitter size={20} color="#808080" />
              </li>

              <li>
                <FaInstagram size={20} color="#808080" />
              </li>

              <li>
                <FaLinkedinIn size={20} color="#808080" />
              </li>

              <li>
                <FaYoutube size={20} color="#808080" />
              </li>
            </ul>
        </div>
        <div>
          <p>Copyright © 2020 - Rits Tecnologia. Todos os direitos reservados.</p>
          <strong>rits</strong>
        </div>
      </Container>
    </Mobile>
 ) 
};

export default Footer;
