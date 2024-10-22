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
    <div className="values bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Home Page</h2>

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