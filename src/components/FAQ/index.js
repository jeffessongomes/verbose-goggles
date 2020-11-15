import {useState, useCallback} from 'react';
import {RiArrowDownSLine} from 'react-icons/ri';

import { Container, Mobile } from './styles';


const Faq = () => {
  const [oneAccordion, setOneAccordion] = useState(false);
  const [twoAccordion, setTwoAccordion] = useState(false);
  const [threeAccordion, setThreeAccordion] = useState(true);
  const [fourAccordion, setFourAccordion] = useState(false);

  const handleOneAccordion = useCallback(() => {
    setOneAccordion(!oneAccordion);
    setTwoAccordion(false);
    setThreeAccordion(false);
    setFourAccordion(false);
  }, [oneAccordion]);

  const handleTwoAccordion = useCallback(() => {
    setOneAccordion(false);
    setTwoAccordion(!twoAccordion);
    setThreeAccordion(false);
    setFourAccordion(false);
  }, [twoAccordion]);

  const handleThreeAccordion = useCallback(() => {
    setOneAccordion(false);
    setTwoAccordion(false);
    setThreeAccordion(!threeAccordion);
    setFourAccordion(false);
  }, [threeAccordion]);

  const handleFourAccordion = useCallback(() => {
    setOneAccordion(false);
    setTwoAccordion(false);
    setThreeAccordion(false);
    setFourAccordion(!fourAccordion);
  }, [fourAccordion]);

  return(
    <Mobile>
      <Container>
        <div className="titleContainer">
          <h2>Perguntas Frequentes</h2>
        </div>
        <div className="accordion" id="accordion">
          <div className="card">
            <div className={`card-header ${oneAccordion && `active`}`} id="headingOne">
              <h2 className="mb-0">
                <button onClick={e => handleOneAccordion()} className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  At vero eos et accusamus et iusto?
                </button>
                <RiArrowDownSLine size={23} color="#BCBCBC" />
              </h2>
            </div>

            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
              <div className="card-body">
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className={`card-header ${twoAccordion && `active`}`} id="headingTwo">
              <h2 className="mb-0">
                <button onClick={e => handleTwoAccordion()} className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum?
                </button>
                <RiArrowDownSLine size={23} color="#BCBCBC" />

              </h2>
            </div>

            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
              <div className="card-body">
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className={`card-header ${threeAccordion && `active`}`} id="headingThree">
              <h2 className="mb-0">
                <button onClick={() => handleThreeAccordion()} className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Lorem ipsum dolor sit amet, consectetur?
                </button>
                <RiArrowDownSLine size={23} color="#BCBCBC" />
              </h2>
            </div>
            <div id="collapseThree" className="collapse show" aria-labelledby="headingThree" data-parent="#accordion">
              <div className="card-body">
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className={`card-header ${fourAccordion && `active`}`} id="headingFour">
              <h2 className="mb-0">
                <button onClick={() => handleFourAccordion()} className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                  At vero eos et accusamus et iusto?
                </button>
                <RiArrowDownSLine size={23} color="#BCBCBC" />
              </h2>
            </div>
            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
              <div className="card-body">
                <p>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Mobile>
  );
};

export default Faq;
