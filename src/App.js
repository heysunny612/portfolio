import About from './components/About';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact';
import Header from './components/Header/Header';
import Services from './components/Services';
import Work from './components/Work';

function App() {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Banner />
      <About />
      <Services />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
