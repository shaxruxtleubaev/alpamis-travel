import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Используем NavLink для активных классов
import '../static/css/components/Navbar.css';

// Импортируем новые изображения
import alpamisTravelLogo from '../images/icons/alpamis-travel-logo.png';
import menuIcon from '../images/icons/menu.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Состояние для открытия/закрытия мобильного меню
  const [scrolled, setScrolled] = useState(false); // Состояние для скролла

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Эффект для уменьшения шапки при скролле
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) { // Если проскроллили более чем на 50px
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}> {/* Добавляем класс 'scrolled' */}
      <div className="navbar-brand">
        <NavLink to="/" onClick={() => setIsOpen(false)}> {/* Используем NavLink для домашней страницы */}
          <img src={alpamisTravelLogo} alt="Alpamis Travel Logo" className="navbar-logo" />
          <span className="brand-text">Alpamis Travel</span> {/* Текстовое название */}
        </NavLink>
      </div>

      {/* Кнопка-гамбургер для мобильных - теперь с изображением */}
      <button className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Открыть меню">
        <img src={menuIcon} alt="Menu" className="menu-icon" />
      </button>

      {/* Добавляем класс 'open' если меню открыто */}
      <ul className={`navbar-nav ${isOpen ? 'open' : ''}`}>
        <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsOpen(false)}>
            Главная
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/places" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsOpen(false)}>
            Места
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/zoroastrianism" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsOpen(false)}>
            Зороастризм
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/routes" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsOpen(false)}>
            Наши Маршруты
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => setIsOpen(false)}>
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;