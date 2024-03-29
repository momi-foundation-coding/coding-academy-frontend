import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import TopSection from './top-section';
import Featured from './featured';
import AboutUs from './about-us';
import Services from './services';
import Stats from './stats';

const HomeScreen = () => {
  return (
    <div className="container-fluid">
      <NavBar />
      <TopSection />
      <Featured />
      <AboutUs />
      <Stats />
      <Services />
      <Footer />
    </div>
  );
}

export default HomeScreen;
