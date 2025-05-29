import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Импортируем новый компонент Footer
import Home from './pages/Home';
import Places from './pages/Places';
import Contacts from './pages/Contacts';
import Zoroastrianism from './pages/Zoroastrianism';
import OurRoutes from './pages/Routes'; // Убедитесь, что это ваш компонент маршрутов

// Импорты глобальных стилей и утилит
import './static/css/global.css';
import './static/css/utilities.css';

// Импорт изображений для фонового слайдера
import back1 from './images/back1.jpg';
import back2 from './images/back2.jpg';
import back3 from './images/back3.jpg';
import back4 from './images/back4.jpg';
import back5 from './images/back5.jpg';

const backgroundImages = [back1, back2, back3, back4, back5];

function App() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Эффект для уменьшения шапки при скролле
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) { // Убедимся, что navbar существует
        if (window.scrollY > 50) { // Например, уменьшаем после 50px скролла
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      {/* Background Slider должен быть вне app-container, если он фон всего body,
          или позиционироваться абсолютно внутри app-container с низким z-index */}
      <div className="background-slider">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`background-image ${index === currentBgIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      <div className="app-container"> {/* app-container теперь будет управлять Flexbox */}
        <Navbar />
        {/* Main content wrapper для отступа от фиксированного навбара */}
        <main className="main-content-wrapper">
          <Routes>
            <Route path="/"       element={<Home />} />
            <Route path="/places" element={<Places />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/zoroastrianism" element={<Zoroastrianism />} />
            <Route path="/routes" element={<OurRoutes />} />
          </Routes>
        </main>
        <Footer /> {/* Футер */}
      </div>
    </Router>
  );
}

export default App;