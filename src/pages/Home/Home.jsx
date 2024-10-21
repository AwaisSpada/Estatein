import Reviews from "./Reviews";
import FAQs from "./FAQs";
import FeaturedProperties from "./FeaturedProperties";
import FourCards from "./FourCards";
import HeroSection from "./HeroSection";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <FourCards />
      <FeaturedProperties />
      <Reviews />
      <FAQs />
    </div>
  );
};

export default Home;
