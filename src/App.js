import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import SideNav from './components/SideNav';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <SideNav location='left' />
    </>
  );
}

export default App;
