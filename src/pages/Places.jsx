import React, { useEffect, useState } from 'react';
import PlaceCard from '../components/PlaceCard';

import pic1 from '../images/pic1.png';
import pic2 from '../images/pic2.png';
import pic3 from '../images/pic3.png';
import pic4 from '../images/pic4.png';

export default function Places() {
  const [places, setPlaces] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // Состояние для открытого изображения

  useEffect(() => {
    // Временно хардкодим данные для одного места
    setPlaces([
      {
        id: 1,
        title: 'Памятник: Кургашин-кала',
        description: `Кургашин-кала расположена на территории «Кызылкум» ССГ Элликкалинского района.
Памятник впервые обследован Хорезмской археологической экспедицией в 1938 г.
В 1981 г. произведены археологические работы Каракалпакским филиалом АН РУз.
В 1985–1986 гг. Хорезмская экспедиция проводила раскопки.
Крепость имеет форму прямоугольника размером 132,9×89,2 м.
Двойные стены сохранились на высоту 10–12 м.
Стены усилены тремя башнями, въезд защищён предвратным сооружением, а по периметру идёт барьерная стенка.`,
        media: [
          { url: pic1, type: 'image' },
          { url: pic2, type: 'image' },
          { url: pic3, type: 'image' },
          { url: pic4, type: 'image' },
        ],
      },
      // Добавлять другие места здесь пока не будем, как вы просили
    ]);
  }, []);

  const openLightbox = (imageUrl) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden'; // Запретить скролл страницы
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = ''; // Разрешить скролл страницы
  };

  return (
    <div className="places-container">
      <h2>Интересные места Каракалпакстана</h2>
      <div className="places-list">
        {places.map(p => (
          <div className="place-card" key={p.id}>
            {p.media && p.media.length > 0 && (
              <div className="media-preview">
                {p.media.map((m, i) =>
                  m.type === 'video' ? (
                    <video key={i} controls src={m.url} />
                  ) : (
                    <img key={i} src={m.url} alt={p.title} onClick={() => openLightbox(m.url)} />
                  )
                )}
              </div>
            )}
            <h3>{p.title}</h3>
            <p style={{ whiteSpace: 'pre-line' }}>{p.description}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImage} alt="Full screen" />
            <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
          </div>
        </div>
      )}
    </div>
  );
}