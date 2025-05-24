import React, { useEffect } from 'react'; // Добавил useEffect
import heroImg       from '../images/nation.jpg';
import historyImg    from '../images/history.jpg';
import languageImg   from '../images/language.jpg';
import traditionsImg from '../images/traditions.jpg';
import craftsImg     from '../images/crafts.jpg';
import cuisineImg    from '../images/cuisine.jpg';
// import nature1       from '../images/nature1.jpg'; // Убрал импорты для галереи природы
// import nature2       from '../images/nature2.jpg';
// import nature3       from '../images/nature3.jpg';
// import nature4       from '../images/nature4.jpg';
import videoCulture  from '../images/culture_video.mp4'; // Пример видео

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          } else {
            // Опционально: можно убрать класс 'appear', чтобы элементы исчезали при прокрутке вверх
            // entry.target.classList.remove('appear');
          }
        });
      },
      {
        threshold: 0.1, // Элемент будет появляться, когда 10% его видимой части будет на экране
      }
    );

    // Применяем observer ко всем элементам с классом 'fade-in'
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    // Очистка observer при размонтировании компонента
    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []); // Пустой массив зависимостей означает, что эффект запустится один раз при монтировании

  return (
    <div className="home-container">

      {/* HERO */}
      <section className="hero">
        <h2>Добро пожаловать в Каракалпакстан</h2>
        <p>
          Каракалпаки — древний народ с богатой историей, уникальными традициями и самобытной культурой. 
          Приглашаем вас открыть для себя удивительные уголки их родины!
        </p>
        <img src={heroImg} alt="Народ каракалпаков" />
      </section>

      {/* 1. История */}
      <section className="section-block section-block-left fade-in">
        <div className="text">
          <h3>История каракалпаков</h3>
          <p>
            Происхождение каракалпаков уходит в отдалённую древность. Первые упоминания встречаются в хрониках VIII–IX вв. н. э. 
            Они тысячелетиями кочевали между Аралом и пустыней Кызылкум, развивая торговлю и ремёсла.
          </p>
        </div>
        <div className="media">
          <img src={historyImg} alt="Исторический артефакт" />
        </div>
      </section>

      {/* 2. Язык и литература */}
      <section className="section-block section-block-right fade-in">
        <div className="media">
          <img src={languageImg} alt="Книга на каракалпакском языке" />
        </div>
        <div className="text">
          <h3>Язык и литература</h3>
          <p>
            Каракалпакский язык относится к кипчакской группе тюркских языков.
            Местные фольклорные эпосы, поэтические сборники и легенды передаются устно
            из поколения в поколение, сохраняя чувство единства народа.
          </p>
        </div>
      </section>

      {/* 3. Традиции и обряды */}
      <section className="section-block section-block-left fade-in">
        <div className="text">
          <h3>Традиции и обряды</h3>
          <p>
            Обряды весеннего праздника «Навруз», культ гостеприимства «чашки чая» и старинные свадебные ритуалы —
            все они пропитаны глубокой символикой и мелодиями народных песен.
          </p>
        </div>
        <div className="media">
          <img src={traditionsImg} alt="Танцы на празднике Навруз" />
        </div>
      </section>

      {/* УДАЛЕНА СЕКЦИЯ: Галерея Природы */}

      {/* 4. Ремёсла и искусство */}
      <section className="section-block section-block-right fade-in">
        <div className="media">
          <img src={craftsImg} alt="Каракалпакский ковёр" />
        </div>
        <div className="text">
          <h3>Ремёсла и искусство</h3>
          <p>
            Каракалпакские ковры и ткани славятся сложными геометрическими узорами.
            Мастера создают одеяла, пояса и вышивки, используя технику, проверенную веками.
          </p>
        </div>
      </section>

      {/* 5. Кулинария */}
      <section className="section-block section-block-left fade-in">
        <div className="text">
          <h3>Кулинария</h3>
          <p>
            Традиционные блюда — плов с тыквой, бешбармак, самса и лепёшки на топленом масле.
            Местные специи придают жареному рису и мясу неповторимый аромат и уют семейного очага.
          </p>
        </div>
        <div className="media">
          <img src={cuisineImg} alt="Традиционный плов" />
        </div>
      </section>

      {/* НОВАЯ СЕКЦИЯ: Почему стоит посетить */}
      <section className="why-visit fade-in">
        <h2>Почему стоит посетить Каракалпакстан?</h2>
        <div className="card-grid">
          <div className="reason-card">
            <h4>Богатая история</h4>
            <p>Древние памятники, крепости и уникальные археологические находки ждут вас.</p>
          </div>
          <div className="reason-card">
            <h4>Самобытная культура</h4>
            <p>Погрузитесь в мир народных песен, танцев, ремёсел и традиций.</p>
          </div>
          <div className="reason-card">
            <h4>Уникальная природа</h4>
            <p>От бескрайних пустынь до остатков Аральского моря – пейзажи, которые не оставят равнодушными.</p>
          </div>
          <div className="reason-card">
            <h4>Теплое гостеприимство</h4>
            <p>Местные жители встретят вас с открытым сердцем и поделятся своей культурой.</p>
          </div>
        </div>
      </section>

      {/* НОВАЯ СЕКЦИЯ: Познакомьтесь с культурой (Видео) */}
      <section className="culture-video fade-in">
        <h2>Познакомьтесь с культурой</h2>
        <p>Посмотрите, как живет и празднует народ Каракалпакстана.</p>
        <div className="video-wrapper">
          <video controls autoPlay muted loop src={videoCulture} className="cultural-video"></video>
        </div>
      </section>

    </div>
  );
}