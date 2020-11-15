import { useCallback, useState } from 'react';

import { Container, Mobile } from './styles';

import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';

import table from '../../assets/img/table.svg';

const CarouselFunctions = () => {
  const [btnOne, setBtnOne] = useState(true);
  const [btnTwo, setBtnTwo] = useState(false);
  const [btnThree, setBtnThree] = useState(false);
  const [btnFour, setBtnFour] = useState(false);

  const handleButtonOver = useCallback((e) => {
    e.target.innerText = 'VER REGULAMENTO';
  }, []);

  const handleButtonOut = useCallback((e) => {
    e.target.innerText = 'LINK';
  }, []);

  const handleArrowFunctionsRight = useCallback(() => {
    if(btnOne){
      setBtnOne(false);
      setBtnTwo(true);
      setBtnThree(false);
      setBtnFour(false);
    }else if(btnTwo){
      setBtnOne(false);
      setBtnTwo(false);
      setBtnThree(true);
      setBtnFour(false);
    }else{
      setBtnOne(false);
      setBtnTwo(false);
      setBtnThree(false);
      setBtnFour(true);
    }

  }, [btnOne, btnTwo]);

  const handleArrowFunctionsLeft = useCallback(() => {
    if(btnFour){
      setBtnOne(false);
      setBtnTwo(false);
      setBtnThree(true);
      setBtnFour(false);
    }else if(btnThree){
      setBtnOne(false);
      setBtnTwo(true);
      setBtnThree(false);
      setBtnFour(false);
    }else{
      setBtnOne(true);
      setBtnTwo(false);
      setBtnThree(false);
      setBtnFour(false);
    }

  }, [btnFour, btnThree]);

  const handleFunctions = useCallback((e) => {
    switch (e.target.id) {
      case 'function1':
        setBtnOne(true);
        setBtnTwo(false);
        setBtnThree(false);
        setBtnFour(false);

        break;
      case 'function2':
        setBtnOne(false);
        setBtnTwo(true);
        setBtnThree(false);
        setBtnFour(false);
        
        break;
      case 'function3':
        setBtnOne(false);
        setBtnTwo(false);
        setBtnThree(true);
        setBtnFour(false);
        
        break;
      
      case 'function4':
        setBtnOne(false);
        setBtnTwo(false);
        setBtnThree(false);
        setBtnFour(true);
        
        break;
        
      default:
        break;
    }

  }, []);

  return(
    <Mobile>
      <Container>
        <div className="ContainerTitleFlex">
          <h2>Como funciona?</h2>
          <div>
            <button type="button" onClick={() => handleArrowFunctionsLeft()} className={`${btnOne && 'desabled'}`}>
              <RiArrowLeftSLine size={53} color="#FFF" />
            </button>
            <button type="button" onClick={() => handleArrowFunctionsRight()} className={`${btnFour && 'desabled'}`}>
              <RiArrowRightSLine size={53} />
            </button>
          </div>
        </div>
        <ul>
          <div className={`slideFunctions ${!btnOne && `d-none`}`}>
            <li>
              <div>
                <strong>1</strong>
              </div>
              <div>
                <img src={table} alt="Mesinha" />
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </li>
            <li>
              <div>
                <strong>2</strong>
              </div>
              <div>
                <img src={table} alt="Mesinha" />
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </li>
            <li>
              <div>
                <strong>3</strong>
              </div>
              <div>
                <img src={table} alt="Mesinha" />
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </li>
          </div>

          <div className={`slideFunctions ${!btnTwo && `d-none`}`}>
            <li>
              <div>
                <strong>4</strong>
              </div>
              <div>
                <img src={table} alt="Mesinha" />
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </li>
            <li>
              <div>
                <strong>5</strong>
              </div>
              <div>
                <img src={table} alt="Mesinha" />
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </li>
            <li>
              <div>
                <strong>6</strong>
              </div>
              <div>
                <img src={table} alt="Mesinha" />
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </li>
          </div>

          <div className={`slideFunctions ${!btnThree && `d-none`}`}>
            <li>
              <div>
                <strong>7</strong>
              </div>
              <div>
                <img src={table} alt="Mesinha" />
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </li>
            <li>
              <div>
                <strong>8</strong>
              </div>
              <div>
                <img src={table} alt="Mesinha" />
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </li>
            <li>
              <div>
                <strong>9</strong>
              </div>
              <div>
                <img src={table} alt="Mesinha" />
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </li>
          </div>

          <div className={`slideFunctions ${!btnFour && `d-none`}`}>
            <li>
              <div>
                <strong>10</strong>
              </div>
              <div>
                <img src={table} alt="Mesinha" />
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </li>
            <li>
              <div>
                <strong>11</strong>
              </div>
              <div>
                <img src={table} alt="Mesinha" />
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </li>
            <li>
              <div>
                <strong>12</strong>
              </div>
              <div>
                <img src={table} alt="Mesinha" />
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </li>
          </div>
        </ul>
        <div className="buttonSelectAndButtonHover">
          <div className="button__container">
            <button 
              onMouseOver={e => handleButtonOver(e)} 
              onMouseOut={e => handleButtonOut(e)}
              className="btn-link" 
              type="button">
                LINK
            </button>
          </div>
          <div>
            <div className="navigation__manual--functions">
              <input onChange={e => handleFunctions(e)} type="radio" name="radio-btn" id="function1" />
              <input onChange={e => handleFunctions(e)} type="radio" name="radio-btn" id="function2" />
              <input onChange={e => handleFunctions(e)} type="radio" name="radio-btn" id="function3" />
              <input onChange={e => handleFunctions(e)} type="radio" name="radio-btn" id="function4" />
      
              <label htmlFor="function1" className={`manual__btn--label ${btnOne && `active`}`}></label>
              <label htmlFor="function2" className={`manual__btn--label ${btnTwo && `active`}`}></label>
              <label htmlFor="function3" className={`manual__btn--label ${btnThree && `active`}`}></label>
              <label htmlFor="function4" className={`manual__btn--label ${btnFour && `active`}`}></label>

            </div>
          </div>
        </div>
      </Container>
    </Mobile>
  );
}

export default CarouselFunctions;
