import { Container } from './styles';

import Carousel from '../../components/Carousel';
import Card from '../../components/Card';
import Playlist from '../../components/Playlist';
import CarouselFunctions from '../../components/CarouselFunctions';

const Home = () => {
  return(
    <Container>
      <Carousel />
      <div className="cards">
        <Card />
        <Card />
        <Card />
      </div>
      <Playlist />

    <div className="functions">
      <CarouselFunctions />
    </div>
    </Container>
  );
}

export default Home;
