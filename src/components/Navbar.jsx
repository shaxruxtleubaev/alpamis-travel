import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Закрывать меню при ресайзе свыше 480px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 480) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Функция для закрытия меню при клике на ссылку
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Alpamis Travel</h1>
      <button className="menu-toggle" onClick={() => setOpen(o => !o)}>
        ☰
      </button>
      <div className={`nav-links${open ? ' open' : ''}`}>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? 'active' : ''}
          onClick={handleLinkClick}
        >
          Главная
        </NavLink>
        <NavLink
          to="/places"
          className={({ isActive }) => isActive ? 'active' : ''}
          onClick={handleLinkClick}
        >
          Места
        </NavLink>
      </div>
    </nav>
  );
}
