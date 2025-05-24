import React from 'react';
import '../static/css/pages/Contacts.css'; // Импортируем стили для этой страницы

export default function Contacts() {
  return (
    <div className="contacts-container">
      <h2>Наши контакты</h2>

      <div className="contact-info">
        <p><strong>Email:</strong> alpamistravel@gmail.com</p>
        <p><strong>Телефон 1:</strong> +998975009082</p>
        <p><strong>Телефон 2:</strong> +998932626880</p>
      </div>

      <div className="map-section">
        <h3>Наше расположение</h3>
        <p>Наши ответственные лица находятся в городе Нукус, Каракалпакстан.</p>
        <div className="map-embed">
          {/*
            Здесь будет встроена карта Google Maps.
            Вам нужно будет получить HTML-код для встраивания карты Нукуса с Google Maps.
            Перейдите на Google Maps (maps.google.com), найдите "Нукус",
            нажмите "Поделиться" -> "Встроить карту" и скопируйте iframe-код.
            Замените текст ниже своим кодом.
          */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d154407.41164966606!2d59.54460391307049!3d42.4503716949392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41e8c9509e53001f%3A0xc3f6087b7a637d9!2z0J3QvtCy0L7QstCw!5e0!3m2!1sru!2suy!4v1716531776949!5m2!1sru!2suy"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Карта Нукуса"
          ></iframe>
        </div>
      </div>
    </div>
  );
}