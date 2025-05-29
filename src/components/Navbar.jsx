import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../static/css/components/Navbar.css'; // <-- Убедитесь, что этот путь верен!

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Alpamis Travel</Link> {/* Ваш логотип или название компании */}
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Главная
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/places" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Места
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/zoroastrianism" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Зороастризм
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/routes" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Наши Маршруты
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;