import {useState, useCallback} from 'react';

import {IoIosArrowForward, IoIosArrowBack} from 'react-icons/io'; 

import {Container, Mobile} from './styles';

import banner1 from '../../assets/img/banner-4.png';
import banner2 from '../../assets/img/banner-2.jpg';

const Carousel = () => {
  const [slideOne, setSlideOne] = useState(true);
  const [slideTwo, setSlideTwo] = useState(false);
  
  const handleLeftCarousel = useCallback(() => {
    if(slideOne){
      setSlideOne(false);
      setSlideTwo(true);
    }else{
      setSlideOne(true);
      setSlideTwo(false);
    }
  }, [slideOne]);

  const handleRightCarousel = useCallback(() => {
    if(slideTwo){
      setSlideTwo(false);
      setSlideOne(true);
    }else{
      setSlideTwo(true);
      setSlideOne(false);
    }

  }, [slideTwo]);


  return(
    <Mobile>
      <Container>
        <div className="slider">
          <div className="slides">
            <input type="radio" checked={slideOne} name="radio-btn" id="radio1" />
            <input type="radio" checked={slideTwo} name="radio-btn" id="radio2" />
      
            <div className="btn-arrows">
              <button onClick={handleLeftCarousel}>
                <IoIosArrowBack size={54} color="#FFF" />
              </button>  
              <button onClick={handleRightCarousel}>
                <IoIosArrowForward size={54} color="#FFF" />
              </button>  
            </div>
          
            <div className="slide first">
              <img src={banner1} alt="Primeira imagem" />
            </div>
            <div className="slide">
              <img src={banner2} alt="Segunda imagem" />
            </div>

            <div className="navigation-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
            </div>
          </div>

          <div className="navigation-manual">
            <label htmlFor="radio1" className="manual-btn"></label>
            <label htmlFor="radio2" className="manual-btn"></label>
          </div>
        </div>
      </Container>
    </Mobile>
  );
}

export default Carousel;
