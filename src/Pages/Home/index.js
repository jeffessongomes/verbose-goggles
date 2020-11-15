import { Container } from './styles';

import Carousel from '../../components/Carousel';
import Card from '../../components/Card';
import Playlist from '../../components/Playlist';
import CarouselFunctions from '../../components/CarouselFunctions';
import Faq from '../../components/FAQ';
import Footer from '../../components/Footer';

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
    <Faq />
    <Footer />

    </Container>
  );
}

export default Home;
