import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'; 

import {Container} from './styles';

import banner1 from '../../assets/img/banner-1.jpg';
import banner2 from '../../assets/img/banner-2.jpg';
import banner3 from '../../assets/img/banner-3.jpg';

const Carousel = () => {
  return(
    <Container>
      <div className="slider">
        <div className="slides">
          <input type="radio" checked name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />

          <div className="btn-arrows">
            <button>
              <IoIosArrowBack size={54} color="#FFF" />
            </button>  
            <button>
              <IoIosArrowForward size={54} color="#FFF" />
            </button>  
          </div>
        
          <div className="slide first">
            <img src={banner1} alt="Primeira imagem" />
          </div>
          <div className="slide">
            <img src={banner2} alt="Segunda imagem" />
          </div>
          <div className="slide">
            <img src={banner3} alt="Terceira imagem" />
          </div>

          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
          </div>
        </div>

        <div className="navigation-manual">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
        </div>
      </div>
    </Container>
  );
}

export default Carousel;
