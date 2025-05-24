import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '../static/css/pages/Home.css';

// Импорты изображений
import heroImg from '../images/nation.jpg';
import historyImg from '../images/history.jpg';
import languageImg from '../images/language.jpg';
import traditionsImg from '../images/traditions.jpg';
import craftsImg from '../images/crafts.jpg';
import cuisineImg from '../images/cuisine.jpg';
import videoCulture from '../images/culture_video.mp4';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero">
        <h2>Добро пожаловать в Каракалпакстан с Alpamis Travel!</h2> {/* <-- ОБНОВЛЕНО */}
        <p>
          Каракалпаки — древний народ с богатой историей, уникальными традициями и самобытной культурой.
          Приглашаем вас открыть для себя удивительные уголки их родины!
        </p> {/* <-- ВОССТАНОВЛЕНО */}
        <img src={heroImg} alt="Народ каракалпаков" />
      </section>

      {/* 1. История */}
      <section className="section-block section-block-left fade-in">
        <div className="text">
          <h3>История каракалпаков</h3>
          <p>
            Происхождение каракалпаков уходит в отдалённую древность. Первые упоминания встречаются в хрониках VIII–IX вв. н. э.
            Они тысячелетиями кочевали между Аралом и пустыней Кызылкум, развивая торговлю и ремёсла. Узнайте о древних цивилизациях и кочевых империях, оставивших свой след на этой земле.
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
            Местные фольклорные эпосы, поэтические сборники и легенды, такие как «Алпамыс», передаются устно
            из поколения в поколение, сохраняя чувство единства народа и его уникальную идентичность.
          </p>
        </div>
      </section>

      {/* 3. Традиции и обряды */}
      <section className="section-block section-block-left fade-in">
        <div className="text">
          <h3>Традиции и обряды</h3>
          <p>
            Обряды весеннего праздника «Навруз», культ гостеприимства «чашки чая» и старинные свадебные ритуалы —
            все они пропитаны глубокой символикой и мелодиями народных песен. Станьте свидетелем этих уникальных церемоний.
          </p>
        </div>
        <div className="media">
          <img src={traditionsImg} alt="Танцы на празднике Навруз" />
        </div>
      </section>

      {/* 4. Ремёсла и искусство */}
      <section className="section-block section-block-right fade-in">
        <div className="media">
          <img src={craftsImg} alt="Каракалпакский ковёр" />
        </div>
        <div className="text">
          <h3>Ремёсла и искусство</h3>
          <p>
            Каракалпакские ковры и ткани славятся сложными геометрическими узорами.
            Мастера создают одеяла, пояса и вышивки, используя технику, проверенную веками. Их произведения – это настоящее воплощение народной души.
          </p>
        </div>
      </section>

      {/* 5. Кулинария */}
      <section className="section-block section-block-left fade-in">
        <div className="text">
          <h3>Кулинария</h3>
          <p>
            Традиционные блюда — плов с тыквой, бешбармак, самса и лепёшки на топленом масле.
            Местные специи придают жареному рису и мясу неповторимый аромат и уют семейного очага. Обязательно попробуйте!
          </p>
        </div>
        <div className="media">
          <img src={cuisineImg} alt="Традиционный плов" />
        </div>
      </section>

      {/* НОВАЯ СЕКЦИЯ: Почему стоит посетить - теперь со свайпом */}
      <section className="why-visit fade-in">
        <h2>Почему стоит посетить Каракалпакстан?</h2>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="reason-card">
              <h4>Богатая история и наследие</h4>
              <p>Исследуйте древние памятники, крепости и уникальные археологические находки, свидетельствующие о многовековой истории региона. Откройте для себя загадки прошлых цивилизаций.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reason-card">
              <h4>Самобытная культура и традиции</h4>
              <p>Погрузитесь в мир народных песен, танцев, ремёсел и уникальных традиций каракалпакского народа. Участвуйте в праздниках и обрядах, которые сохранили свою аутентичность.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reason-card">
              <h4>Уникальная природа и пейзажи</h4>
              <p>От бескрайних пустынь до остатков Аральского моря и живописных озёр – Каракалпакстан предлагает пейзажи, которые не оставят равнодушными. Исследуйте уникальную флору и фауну.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reason-card">
              <h4>Теплое гостеприимство</h4>
              <p>Местные жители известны своим радушием. Они встретят вас с открытым сердцем, поделятся своей культурой, историями и угостят традиционными блюдами, создавая незабываемые впечатления.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reason-card">
              <h4>Аутентичные ремёсла</h4>
              <p>Познакомьтесь с мастерами, создающими уникальные ковры, вышивки и изделия из дерева и металла. Приобретите сувениры ручной работы, которые станут настоящим напоминанием о вашем путешествии.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* НОВАЯ СЕКЦИЯ: Познакомьтесь с культурой (Видео) */}
      <section className="culture-video fade-in">
        <h2>Познакомьтесь с культурой</h2>
        <p>Посмотрите, как живет и празднует народ Каракалпакстана.</p>
        <div className="video-wrapper">
          <video controls autoPlay muted loop src={videoCulture} className="cultural-video" playsInline></video>
        </div>
      </section>

    </div>
  );
}