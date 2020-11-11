import { Container } from './styles';

import Carousel from '../../components/Carousel';
import Card from '../../components/Card';
import Playlist from '../../components/Playlist';

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
    </Container>
  );
}

export default Home;
