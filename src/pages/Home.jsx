import React from 'react';
import heroImg       from '../images/nation.jpg';
import historyImg    from '../images/history.jpg';
import languageImg   from '../images/language.jpg';
import traditionsImg from '../images/traditions.jpg';
import craftsImg     from '../images/crafts.jpg';
import cuisineImg    from '../images/cuisine.jpg';

export default function Home() {
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
      <section className="section-block section-block-left">
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
      <section className="section-block section-block-right">
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
      <section className="section-block section-block-left">
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

      {/* 4. Ремёсла и искусство */}
      <section className="section-block section-block-right">
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
      <section className="section-block section-block-left">
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

    </div>
  );
}
