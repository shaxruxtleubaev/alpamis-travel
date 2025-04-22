import React, { useEffect, useState } from 'react';
import PlaceCard from '../components/PlaceCard';

import pic1 from '../images/pic1.png';
import pic2 from '../images/pic2.png';
import pic3 from '../images/pic3.png';
import pic4 from '../images/pic4.png';

export default function Places() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // Пока одна запись про "Кургашин‑кала"
    setPlaces([
      {
        id: 1,
        title: 'Памятник: Кургашин‑кала',
        description: `Кургашин‑кала расположена на территории «Кызылкум» ССГ Элликкалинского района. 
Памятник впервые обследован Хорезмской археологической экспедицией в 1938 г. 
В 1981 г. произведены археологические работы Каракалпакским филиалом АН РУз. 
В 1985–1986 гг. Хорезмская экспедиция проводила раскопки. 
Крепость имеет форму прямоугольника размером 132,9×89,2 м. 
Двойные стены сохранились на высоту 10–12 м. 
Стены усилены тремя башнями на длинных сторонах и по одной на коротких. 
Въезд в середине юго‑восточной стены защищён предвратным сооружением. 
Крепость опоясывается барьерной стенкой (протейхизмой). 
Среди находок — керамика IV–III вв. до н. э.`,
        media: [
          { url: pic1, type: 'image' },
          { url: pic2, type: 'image' },
          { url: pic3, type: 'image' },
          { url: pic4, type: 'image' },
        ],
      },
    ]);
  }, []);

  return (
    <div className="places-container">
      <h2>Интересные места Каракалпакстана</h2>
      <div className="places-list">
        {places.map((p) => (
          <PlaceCard key={p.id} place={p} />
        ))}
      </div>
    </div>
  );
}
