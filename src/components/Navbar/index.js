import { Container, Mobile } from './styles';

import logotipo from '../../assets/img/logotipo-1.png';

const Navbar = () => {

  return(
    <Mobile>
      <Container className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logotipo} alt="Logotipo da RITS" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Menu 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Menu 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Menu 3</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Mobile>
  );
}

export default Navbar;
