import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Karakalpak Travel</h1>
      <div className="nav-links">
        <NavLink to="/"       className={({isActive}) => isActive ? 'active' : ''}>
          Главная
        </NavLink>
        <NavLink to="/places" className={({isActive}) => isActive ? 'active' : ''}>
          Места
        </NavLink>
        {/* Убрали ссылку на /admin */}
      </div>
    </nav>
  );
}
