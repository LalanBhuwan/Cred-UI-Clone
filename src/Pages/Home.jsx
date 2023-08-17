import Header from "../Components/common/header/Header";
import HeroSection from "../Components/HeroSection";
import ProductShowcase from "../Components/ProductShowcase";
import FeelSpecial from "../Components/FeelSpecial";
import CredExperience from "../Components/CredExperience";
import CredSecurity from "../Components/CredSecurity";
import BrandsLove from "../Components/BrandsLove";
import WindowPeak from "../Components/WindowPeak";
import MobileScroll from "../Components/MobileScroll";
import CredStory from "../Components/CredStory";
import AppRating from "../Components/AppRating";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <BrandsLove />
      <CredExperience />
      <MobileScroll/>
      <div className="non-mobile">
        <WindowPeak />
      </div>

      <CredSecurity />
      <CredStory/>
      <AppRating/>
      <Footer/>
    </>
  );
};
export default Home;
