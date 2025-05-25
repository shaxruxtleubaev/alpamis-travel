import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../static/css/components/Navbar.css';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Alpamis Travel</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link
          to="/"
          className={location.pathname === '/' ? 'active' : ''}
          onClick={() => setIsMenuOpen(false)}
        >
          Главная
        </Link>
        <Link
          to="/places"
          className={location.pathname === '/places' ? 'active' : ''}
          onClick={() => setIsMenuOpen(false)}
        >
          Места
        </Link>
        <Link
          to="/zoroastrianism" // <-- НОВАЯ ССЫЛКА
          className={location.pathname === '/zoroastrianism' ? 'active' : ''}
          onClick={() => setIsMenuOpen(false)}
        >
          Зороастризм
        </Link>
        <Link
          to="/contacts"
          className={location.pathname === '/contacts' ? 'active' : ''}
          onClick={() => setIsMenuOpen(false)}
        >
          Контакты
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;