import { useState } from 'react';
import logo from '../assets/logo.png';
import '../styles/NavBar.css';

function NavBar({ activePage, setActivePage }) {
  const [open, setOpen] = useState(false);

  const goToPage = (page) => {
    setActivePage(page);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'menu', label: 'Sports Menu' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <button className="brand" type="button" onClick={() => goToPage('home')}>
          <img src={logo} alt="Sports Hub logo" />
          <span>Sports Hub</span>
        </button>

        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        <div className={open ? 'nav-links open' : 'nav-links'}>
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={activePage === item.id ? 'active' : ''}
              onClick={() => goToPage(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
