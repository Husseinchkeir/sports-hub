import { useState } from 'react';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Menu from './pages/Menu.jsx';
import Contact from './pages/Contact.jsx';

const pages = {
  home: Home,
  about: About,
  menu: Menu,
  contact: Contact
};

function App() {
  const [activePage, setActivePage] = useState('home');
  const CurrentPage = pages[activePage] || Home;

  return (
    <div className="app-shell">
      <NavBar activePage={activePage} setActivePage={setActivePage} />
      <CurrentPage setActivePage={setActivePage} />
      <Footer />
    </div>
  );
}

export default App;
