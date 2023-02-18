// import { Link } from 'react-router-dom'
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import TopSection from './top-section';
import Featured from './featured';
import Gallery from './gallery';

const HomeScreen = () => {
  return (
    <div className="container-fluid">
      <NavBar />
      <TopSection />
      <Featured />
      <Gallery />
      <Footer />
    </div>
  );
}

export default HomeScreen;
