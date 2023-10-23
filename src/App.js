import './App.css';
import MainBanners from './components/banners/MainBanners';
import InfoHome from './components/blockInfoHome/InfoHome';
import CardsApple from './components/cardsCategory/CardsApple';
import Destacado from './components/destacadoSlider/Destacado';
import Descubrir from './components/discoverProducts/Descubrir';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import TestimonialContainer from './components/testimonials/TestimonialContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBanners />
      <div className='main-container'>
        <InfoHome />
        <CardsApple />
      </div>
      <Descubrir />
      <div className='main-container'>
        <CardsApple />
        <Destacado />
        <TestimonialContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
