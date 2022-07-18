import Footer from '../../molecules/Footer/Footer';
import Header from '../../molecules/Header/Header';
import CardFeature from '../../organisms/CardFeature/CardFeature';
import CryptoFeature from '../../organisms/CryptoFeature/CryptoFeature';
import FirststepFeature from '../../organisms/FirststepFeature/FirststepFeature';
import Hero from '../../organisms/Hero/Hero';
import PlatformFeature from '../../organisms/PlatformFeature/PlatformFeature';
import SupportFeature from '../../organisms/SupportFeature/SupportFeature';

const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <CardFeature />
      <PlatformFeature />
      <SupportFeature />
      <CryptoFeature />
      <FirststepFeature />
      <Footer />
    </>
  );
};

export default LandingPage;
