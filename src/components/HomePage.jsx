import NavigationBar from './NavigationBar';
import SliderSection from './SliderSection';
import BannerGrid from './BannerGrid';
import ProductCarousel from './ProductCarousel';
import Values from './Values';
import Banner from './Banner';
import Newsletter from './Newsletter';
import Footer from './Footer';

function HomePage() {
  return (
    <div>
    <NavigationBar />
    <SliderSection />
    <BannerGrid />
    <ProductCarousel />
    <Values />
    <Banner />
    <Newsletter />
    <Footer />
  </div>
  );
}

export default HomePage;