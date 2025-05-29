import React, { useEffect, useState } from 'react';
import '../static/css/pages/Routes.css';

// ИМПОРТЫ ИЗОБРАЖЕНИЙ МАРШРУТОВ (ПРОВЕРЬТЕ И ЗАМЕНИТЕ НА ВАШИ АКТУАЛЬНЫЕ ПУТИ И ИМЕНА ФАЙЛОВ!)
// Если вы используете другие форматы (.png, .webp) или названия, измените соответственно.
import nukusImage from '../images/routes/nukus_city.jpg';
import ichanKalaKhalkabadImage from '../images/routes/ichan_kala_khalkabad.jpg';
import yurtCraftsmenHouseImage from '../images/routes/yurt_craftsmen_house.jpg';
import ozKaraterenImage from '../images/routes/oz_karateren.jpg';
import chilpykImage from '../images/routes/chilpyk_route.jpg';
import kyzylKalaImage from '../images/routes/kyzyl_kala.jpg';
import toprakKalaImage from '../images/routes/toprak_kala_route.jpg';
import ayazKalaImage from '../images/routes/ayaz_kala.jpg';
import mizdakhkanRouteImage from '../images/routes/mizdakhkan_route.jpg';
import gyaurKalaImage from '../images/routes/gyaur_kala.jpg';
import muynakShipGraveyardImage from '../images/routes/muynak_ship_graveyard.jpg';
import yurtCampImage from '../images/routes/yurt_camp.jpg';

export default function Routes() {
  const [selectedImage, setSelectedImage] = useState(null);

  const routesData = [
    {
      name: 'Северный маршрут: Погружение в Традиции и Природу',
      tagline: 'Откройте для себя подлинный быт, древние ремесла и уникальные природные красоты северного Каракалпакстана.',
      id: 'north-route',
      stops: [
        {
          name: 'Нукус',
          description: 'Ваше приключение начинается в Нукусе, современном культурном и административном центре Республики Каракалпакстан. Город известен своими музеями, особенно Музеем искусств имени Игоря Савицкого, хранящим уникальные коллекции русского авангарда и произведений народов Востока.',
          image: nukusImage,
        },
        {
          name: 'Ичан кала (Халкабад)',
          description: 'Посетите древние укрепления Ичан-калы в Халкабаде (не путать с Хивой) – это локальная версия исторической крепости, отражающая архитектурные традиции региона и служившая важным торговым пунктом в прошлом. Позволяет прикоснуться к нетронутой истории.',
          image: ichanKalaKhalkabadImage,
        },
        {
          name: 'Дом ремесленников изготовителей юрты',
          description: 'Познакомьтесь с вековыми традициями создания юрт – символа кочевой жизни народов Центральной Азии. Здесь вы увидите полный процесс изготовления этих уникальных жилищ из войлока и дерева и сможете оценить мастерство местных умельцев.',
          image: yurtCraftsmenHouseImage,
        },
        {
          name: 'Оз.Каратерен',
          description: 'Насладитесь спокойствием и живописными видами одного из крупнейших озер региона, образовавшегося в дельте Амударьи. Это прекрасное место для отдыха на природе, наблюдения за птицами и наслаждения уникальной экосистемой.',
          image: ozKaraterenImage,
        },
      ],
    },
    {
      name: 'Южный маршрут: Крепости Древнего Хорезма',
      tagline: 'Погрузитесь в тысячелетнюю историю, исследуя грандиозные руины древних крепостей и городов Хорезма, свидетельствующих о могущественных цивилизациях, процветавших в пустыне.',
      id: 'south-route',
      stops: [
        {
          name: 'Нукус',
          description: 'Начало пути к легендарным археологическим памятникам Хорезма. Нукус служит удобной отправной точкой для экспедиций к древним цитаделям, расположенным в пустыне.',
          image: nukusImage, // Переиспользование изображения Нукуса
        },
        {
          name: 'Чылпык',
          description: 'Древняя зороастрийская дахма (Башня Молчания) на вершине конического холма, расположенная в 43 км к югу от Нукуса. Памятник служил местом, куда по зороастрийскому обычаю выносили умерших для очищения костей от мягких покровов. Уникальный и таинственный исторический объект.',
          image: chilpykImage,
        },
        {
          name: 'Кызыл-кала',
          description: 'Хорошо сохранившаяся "Красная крепость", возвышающаяся над пустыней. Ее мощные стены и башни, построенные из необожженного кирпича, являются прекрасным примером фортификационного искусства древнего Хорезма. С крепостных стен открываются захватывающие виды.',
          image: kyzylKalaImage,
        },
        {
          name: 'Топрак-кала',
          description: 'Руины древней столицы Хорезма (1-4 вв. н.э.), известной своим величественным дворцом с уникальными росписями, изображающими сцены охоты, танцев, а также изображения богинь и царей. Здесь были найдены ценнейшие письменные документы на хорезмийском языке, раскрывающие историю древнего государства.',
          image: toprakKalaImage,
        },
        {
          name: 'Аязкала',
          description: 'Комплекс из трех древних крепостей (1-7 вв. н.э.), расположенных на живописных холмах в пустыне. Аяз-Кала предлагает не только археологические открытия, но и потрясающие панорамные виды на окружающую пустыню и солевые озера, особенно красивые на закате.',
          image: ayazKalaImage,
        },
      ],
    },
    {
      name: 'Маршрут к Аралу: Эхо Моря и Древние Города',
      tagline: 'Путешествие к высохшему морю, где история встречается с современной экологической драмой, а древние города хранят вековые тайны посреди некогда шумных торговых путей.',
      id: 'aral-route',
      stops: [
        {
          name: 'Нукус',
          description: 'Стартовая точка для экспедиции к Аральскому морю, предлагающая знакомство с уникальной природой и культурой региона, прежде чем отправиться к исчезнувшему морю.',
          image: nukusImage, // Переиспользование изображения Нукуса
        },
        {
          name: 'Миздахкан',
          description: 'Древний археологический комплекс и некрополь, расположенный на трех холмах. Это место, где переплетаются зороастрийские и исламские традиции, сохранились мавзолеи и минареты различных эпох, что делает его священным для паломников.',
          image: mizdakhkanRouteImage,
        },
        {
          name: 'Гяур-кала',
          description: 'Руины древней крепости, предположительно использовавшейся для культовых церемоний в зороастрийскую эпоху. Гяур-кала является важным свидетельством богатой религиозной истории региона и предлагает виды на окружающую пустыню.',
          image: gyaurKalaImage,
        },
        {
          name: 'Муйнак (кладбище кораблей)',
          description: 'Оцените масштаб экологической катастрофы Аральского моря, увидев ржавеющие остовы рыболовецких судов посреди пустыни. Это место, которое вызывает глубокие размышления о влиянии человека на природу и предлагает уникальные, постапокалиптические пейзажи.',
          image: muynakShipGraveyardImage,
        },
        {
        name: 'Юртовый лагерь',
        description: 'Проведите незабываемую ночь в традиционной юрте, наслаждаясь тишиной пустыни и бескрайним звездным небом Аральского региона. Это аутентичный опыт, позволяющий погрузиться в культуру кочевых народов.',
        image: yurtCampImage,
        },
      ],
    },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        } else {
          // entry.target.classList.remove('appear');
        }
      });
    }, observerOptions);

    // Удаляем .arrow-down-css из наблюдаемых элементов
    const animatedElements = document.querySelectorAll('.route-info-block, .route-stop');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const openLightbox = (imageUrl) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="routes-container">
      {routesData.map((route, routeIndex) => (
        <section key={route.id} className={`route-section`}>
          {/* Новый блок для заголовка и описания маршрута */}
          <div className="route-info-block fade-in">
            <h2 className="route-section-heading">{route.name}</h2>
            <p className="route-tagline">{route.tagline}</p>
          </div>

          <div className="route-path">
            {route.stops.map((stop, stopIndex) => (
              <React.Fragment key={stop.name}>
                <div className="route-stop fade-in">
                  <div className="image-container">
                    <img src={stop.image} alt={stop.name} className="viewable" onClick={() => openLightbox(stop.image)} />
                    <div className="view-icon">+</div>
                  </div>
                  <div className="text-content">
                    <h3>{stop.name}</h3>
                    <p>{stop.description}</p>
                  </div>
                </div>
                {/* Удален условный рендеринг стрелочки */}
              </React.Fragment>
            ))}
          </div>
        </section>
      ))}

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