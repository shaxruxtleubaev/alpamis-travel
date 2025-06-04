import React from 'react';
import '../static/css/components/Footer.css'; // Создадим этот CSS файл

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Alpamis Travel</h3>
          <p>
            Alpamis Travel - ваш надежный партнер в изучении Каракалпакстана.
            Мы предлагаем уникальные туры по историческим местам, культурным достопримечательностям
            и живописным природным ландшафтам этого удивительного региона.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Быстрые ссылки</h3>
          <ul>
            <li><a href="/">Главная</a></li>

            <li><a href="/routes">Наши туры</a></li>
            <li><a href="/contacts">Контакты</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Свяжитесь с нами</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> Нукус, Республика Каракалпакстан, Узбекистан
          </p>
          <p>
            <i className="fas fa-phone"></i> +998975009082
          </p>
          <p>
            <i className="fas fa-envelope"></i> alpamistravel@gmail.com
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {currentYear} Alpamis Travel. Все права защищены.
      </div>
    </footer>
  );
}