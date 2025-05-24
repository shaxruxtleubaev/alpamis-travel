import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Places from './pages/Places';
import Admin from './pages/Admin';

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
    }, 10000); // Меняем изображение каждые 10 секунд (10000 мс)

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="app-container">
        {/* Фоновый слайдер */}
        <div className="background-slider">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`background-image ${index === currentBgIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>

        <Navbar />
        <Routes>
          <Route path="/"       element={<Home />} />
          <Route path="/places" element={<Places />} />
          <Route path="/admin"  element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;