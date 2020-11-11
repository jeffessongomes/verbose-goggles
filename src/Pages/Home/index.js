import { Container } from './styles';

import Carousel from '../../components/Carousel';
import Card from '../../components/Card';

const Home = () => {
  return(
    <Container>
      <Carousel />
      <div className="cards">
        <Card />
        <Card />
        <Card />
      </div>
    </Container>
  );
}

export default Home;
