import './App.scss';
import Climb from './components/Climb/Climb';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import History from './components/History/History';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <History />
    <Climb />
    <Footer />
    </>
  );
}

export default App;
