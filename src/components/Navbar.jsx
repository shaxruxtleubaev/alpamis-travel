import React, { useState } from 'react'; // Импортируем useState
import { Link, NavLink } from 'react-router-dom';
import '../static/css/components/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Состояние для открытия/закрытия мобильного меню

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Alpamis Travel</Link> {/* Ваш логотип или название компании */}
      </div>

      {/* Кнопка-гамбургер для мобильных */}
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Открыть меню">
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
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