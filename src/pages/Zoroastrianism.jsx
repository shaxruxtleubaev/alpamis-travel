import React, { useEffect, useState } from 'react';
import '../static/css/pages/Zoroastrianism.css';

// ИМПОРТЫ ИЗОБРАЖЕНИЙ
// Общие изображения
import zoroHero from '../images/zoroastrianism/zoro_hero_landscape.jpg';
import zoroHistory from '../images/zoroastrianism/zoro_history_ancient.jpg';

// Изображения для памятников
import chilpyk1 from '../images/zoroastrianism/chilpyk_1.jpg';
import chilpyk2 from '../images/zoroastrianism/chilpyk_2.jpg'; // Если есть второе фото Чыльпыка
import toprakKalaRecon from '../images/zoroastrianism/toprak_kala_reconstruction.jpg';
import toprakKalaRuins from '../images/zoroastrianism/toprak_kala_ruins.jpg';
import mizdakhkanOverview from '../images/zoroastrianism/mizdakhkan_overview.jpg';
import mizdakhkanDetail from '../images/zoroastrianism/mizdakhkan_detail.jpg'; // Если есть второе фото Миздахкана
import kazaklyYatkanRuins from '../images/zoroastrianism/kazakly_yatkan_ruins.jpg';
import kazaklyYatkanTemple from '../images/zoroastrianism/kazakly_yatkan_temple.jpg'; // Если есть второе фото Казаклы-Яткана

// ИЗОБРАЖЕНИЯ ДЛЯ БОГА СРОША (ЗАМЕНИТЕ НА ВАШИ АКТУАЛЬНЫЕ ПУТИ!)
// Убедитесь, что эти файлы существуют в указанных директориях
import sroshImage1 from '../images/srosh/srosh_god_1.jpg'; // Пример: замените на ваш путь
import sroshImage2 from '../images/srosh/srosh_god_2.jpg'; // Пример: замените на ваш путь
import sroshImage3 from '../images/srosh/srosh_god_3.jpg'; // Пример: замените на ваш путь
import sroshImage4 from '../images/srosh/srosh_god_4.jpg'; // Пример: замените на ваш путь


export default function Zoroastrianism() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            // Если вы хотите, чтобы элемент появлялся только один раз, раскомментируйте следующую строку:
            // observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.01, // <--- ИЗМЕНЕНО ДЛЯ ЛУЧШЕЙ РАБОТЫ НА VERCEL
      }
    );

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const openLightbox = (imageUrl) => {
    setSelectedImage(imageUrl);
    document.body.style.overflow = 'hidden'; // Предотвращаем прокрутку фона
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = ''; // Возвращаем прокрутку фона
  };

  return (
    <div className="zoroastrianism-container">
      <section className="hero-zoro fade-in">
        <h1>Зороастризм в Каракалпакстане: Древние огни Хорезма</h1>
        <p>
          Путешествие вглубь веков, к истокам одной из древнейших религий мира — зороастризма,
          который оставил неизгладимый след на земле Каракалпакстана.
          Раскройте тайны его священных ритуалов и монументальных сооружений,
          построенных во славу огня и света.
        </p>
        <div className="image-container">
          <img src={zoroHero} alt="Древний пейзаж Каракалпакстана" className="hero-image viewable" onClick={() => openLightbox(zoroHero)} />
          <div className="view-icon">+</div>
        </div>
      </section>

      <section className="section-block section-history fade-in">
        <h2>Эхо веков: Зороастризм в истории региона</h2>
        <div className="content-wrapper">
          <p>
            Зороастризм, одна из старейших монотеистических религий, имеет глубокие корни в Центральной Азии, и в частности, в историческом Хорезме, на территории которого расположен современный Каракалпакстан. Археологические открытия свидетельствуют о распространении зороастрийских культов в регионе уже в **первых веках нашей эры**, что подтверждается датировкой таких памятников, как Чыльпык.
          </p>
          <p>
            На протяжении столетий зороастризм формировал духовную жизнь и культурные практики древних государств Хорезма. Его влияние прослеживается в архитектуре, погребальных обрядах и даже в символике, обнаруженной в руинах древних городов и крепостей. Культовые практики, такие как **обряды плодородия и почитание воды**, были неотъемлемой частью жизни, а также указывают на глубокую связь с царской властью, о чем свидетельствуют находки в храмовых комплексах.
          </p>
          <div className="image-container">
            <img src={zoroHistory} alt="Древние руины Хорезма" className="content-image viewable" onClick={() => openLightbox(zoroHistory)} />
            <div className="view-icon">+</div>
          </div>
        </div>
      </section>

      {/* НОВАЯ СЕКЦИЯ: БОГ СРОШ - ОБНОВЛЕННЫЙ ТЕКСТ */}
      <section className="section-block section-sraosha fade-in">
        <h2>Срош: Защитник и Посланник в Древнем Хорезме</h2>
        <div className="content-wrapper">
          <p>
            **Срош (Sraosha)**, чье имя в зороастризме означает **"Повиновение"**, является одним из ключевых язатов (божеств). Он почитался как верный посланник Ахура Мазды и могущественный защитник от злых сил, особенно в ночное время, часто изображаемый с боевой булавой. Его роль заключалась в поддержании порядка и принесении света.
          </p>
          <p>
            Учитывая глубокие корни и широкое распространение зороастризма на территории древнего Хорезма, частью которого является современный Каракалпакстан (как показывают дахмы, алтари огня и храмовые комплексы в Чыльпыке, Топрак-Кале, Миздахкане, Казаклы-Яткане), верования, связанные со Срошем, несомненно, были важны для местных приверженцев этой религии. Хотя конкретные археологические свидетельства или прямые упоминания культа Сроша в этих памятниках не детализированы в предоставленных источниках, его центральная роль в зороастрийском пантеоне подразумевает его почитание в рамках общей религиозной практики в регионе.
          </p>
          <div className="image-gallery">
            <div className="image-container">
              {/* ЗАМЕНИТЕ ЭТО НА ПУТЬ К ВАШЕМУ ИЗОБРАЖЕНИЮ СРОША 1 */}
              <img src={sroshImage1} alt="Изображение бога Сроша 1" className="viewable" onClick={() => openLightbox(sroshImage1)} />
              <div className="view-icon">+</div>
            </div>
            <div className="image-container">
              {/* ЗАМЕНИТЕ ЭТО НА ПУТЬ К ВАШЕМУ ИЗОБРАЖЕНИЮ СРОША 2 */}
              <img src={sroshImage2} alt="Изображение бога Сроша 2" className="viewable" onClick={() => openLightbox(sroshImage2)} />
              <div className="view-icon">+</div>
            </div>
            <div className="image-container">
              {/* ЗАМЕНИТЕ ЭТО НА ПУТЬ К ВАШЕМУ ИЗОБРАЖЕНИЮ СРОША 3 */}
              <img src={sroshImage3} alt="Изображение бога Сроша 3" className="viewable" onClick={() => openLightbox(sroshImage3)} />
              <div className="view-icon">+</div>
            </div>
            <div className="image-container">
              {/* ЗАМЕНИТЕ ЭТО НА ПУТЬ К ВАШЕМУ ИЗОБРАЖЕНИЮ СРОША 4 */}
              <img src={sroshImage4} alt="Изображение бога Сроша 4" className="viewable" onClick={() => openLightbox(sroshImage4)} />
              <div className="view-icon">+</div>
            </div>
          </div>
        </div>
      </section>
      {/* КОНЕЦ НОВОЙ СЕКЦИИ */}

      <section className="section-monuments fade-in">
        <h2>Ключевые памятники зороастризма в Каракалпакстане</h2>

        <div className="monument-card fade-in">
          <h3>Чыльпык: Башня Молчания</h3>
          <p>
            Расположенный в 43 км к югу от Нукуса на правом берегу Амударьи, на вершине конического холма высотой 35-40 м, **Чыльпык** является выдающимся памятником. Он был обследован в 1940 году Хорезмской археологической экспедицией АН СССР и функционально определён как **дахма**, или "Башня Молчания". По зороастрийскому обычаю, это было место, куда выносили умерших для ритуального очищения костей от мягких покровов. В плане он имеет форму незамкнутого, немного сплюснутого круга диаметром около 65-79 метров. В средней части дахмы выступает скала, а всё пространство между ней и стеной заполнено песком и глиной на всю высоту. Керамика, найденная при возведении стен, с полосчатым лощением по красному ангобу, может быть отнесена к **первым векам нашей эры**. Следы ремонта стен в северной части относятся к VII-VIII векам, а следующий период оживления – к IX-XI векам, что свидетельствует о длительном использовании памятника.
          </p>
          <div className="image-gallery">
            <div className="image-container">
              <img src={chilpyk1} alt="Общий вид дахмы Чыльпык" className="viewable" onClick={() => openLightbox(chilpyk1)} />
              <div className="view-icon">+</div>
            </div>
            {chilpyk2 && (
              <div className="image-container">
                <img src={chilpyk2} alt="Чыльпык - дополнительный ракурс" className="viewable" onClick={() => openLightbox(chilpyk2)} />
                <div className="view-icon">+</div>
              </div>
            )}
          </div>
        </div>

        <div className="monument-card fade-in">
          <h3>Топрак-Кала: Королевские ритуалы и культ воды</h3>
          <p>
            Древний город **Топрак-Кала** известен своим величественным дворцом, который, вероятно, служил не только резиденцией правителей, но и центром **королевских обрядов плодородия**. Настенные росписи дворца изображали восседающих правителей с богинями, сцены танцев с мужчинами и женщинами. Декор включал изображения оленей, грифонов, а также символы изобилия, такие как **виноградные лозы и гранаты**. Главная ниша дворца содержала изображение матери-богини с диким животным. Особое значение имел коридор с картинами воды и рыбы, что однозначно указывает на связь с **культом воды** — важным элементом зороастрийских верований, где вода почитается как священная стихия. Дворец, первоначально служивший королевским святилищем, был ненадолго покинут в начале IV века н.э., а затем, после реставрации, использовался как административная цитадель города.
          </p>
          <div className="image-gallery">
            <div className="image-container">
              <img src={toprakKalaRecon} alt="Реконструкция дворца Топрак-Кала" className="viewable" onClick={() => openLightbox(toprakKalaRecon)} />
              <div className="view-icon">+</div>
            </div>
            <div className="image-container">
              <img src={toprakKalaRuins} alt="Руины Топрак-Калы" className="viewable" onClick={() => openLightbox(toprakKalaRuins)} />
              <div className="view-icon">+</div>
            </div>
          </div>
        </div>

        <div className="monument-card fade-in">
          <h3>Миздахкан: Великий некрополь и его тайны</h3>
          <p>
            Крупный археологический комплекс древнего **Миздахкана** расположен на значительной площади – более 200 гектаров – на трёх холмах, находящихся на юго-западной окраине города Ходжейли. Весь комплекс представляет собой обширный некрополь, где на протяжении веков совершались обряды, связанные с культом мертвых, характерные для зороастризма. Плоские вершины холмов и обширные пространства между ними служили местом для разнообразных погребальных и культовых сооружений, что делает Миздахкан одним из важнейших объектов для изучения зороастрийских традиций в Центральной Азии.
          </p>
          <div className="image-gallery">
            <div className="image-container">
              <img src={mizdakhkanOverview} alt="Общий вид археологического комплекса Миздахкан" className="viewable" onClick={() => openLightbox(mizdakhkanOverview)} />
              <div className="view-icon">+</div>
            </div>
            {mizdakhkanDetail && (
              <div className="image-container">
                <img src={mizdakhkanDetail} alt="Детали руин Миздахкана" className="viewable" onClick={() => openLightbox(mizdakhkanDetail)} />
                <div className="view-icon">+</div>
              </div>
            )}
          </div>
        </div>

        <div className="monument-card fade-in">
          <h3>Казаклы-Яткан (Акшахан-Кала): Город огня и царей</h3>
          <p>
            Городище **Казаклы-Яткан**, также известное как Акшахан-Кала, было открыто в 1956 году и предварительно изучено в 1982 и 1985 гг. С 1995 года здесь ведутся стационарные исследования международной археологической экспедиции. Развалины этого городища расположены на территории Берунийского района Республики Каракалпакстан. Городище состоит из двух частей: Верхнего города и Нижнего города, которые входили в общую оборонительную систему. Основные полевые работы сосредоточены в "Верхнем городе", который впоследствии был назван "священным городом".
          </p>
          <p>
            Центральным объектом является **храм** – массивное монументальное здание почти квадратной формы (приблизительно 60х60 м) с круглыми башнями по углам и воротами, фланкированными полукруглыми башнями, расположенными посредине каждой из четырех внешних стен. Внутри храмовой площади отмечены следы сильной прокалённости, и здесь обнаружена прямоугольная сильно обожженная площадка, условно определенная как **"алтарь огня"**. Кроме того, в северной половине храма располагалась своеобразная **портретная галерея царей**, что указывает на тесную связь между зороастрийским культом и царской властью в древнем Хорезме.
          </p>
          <div className="image-gallery">
            <div className="image-container">
              <img src={kazaklyYatkanRuins} alt="Руины городища Казаклы-Яткан" className="viewable" onClick={() => openLightbox(kazaklyYatkanRuins)} />
              <div className="view-icon">+</div>
            </div>
            {kazaklyYatkanTemple && (
              <div className="image-container">
                <img src={kazaklyYatkanTemple} alt="Предполагаемый храм Казаклы-Яткана" className="viewable" onClick={() => openLightbox(kazaklyYatkanTemple)} />
                <div className="view-icon">+</div>
              </div>
            )}
          </div>
        </div>

      </section>

      <section className="section-conclusion fade-in">
        <h2>Живое наследие</h2>
        <p>
          Памятники зороастризма в Каракалпакстане служат уникальными свидетельствами глубокой истории и богатой культуры региона. Они не только рассказывают о древних верованиях, но и позволяют прикоснуться к сложным обрядам, искусству и мировоззрению народов, населявших эти земли тысячелетия назад. Изучение этих объектов продолжает раскрывать новые грани зороастрийского наследия, делая Каракалпакстан ключевым центром для понимания одной из величайших религий древности.
        </p>
      </section>

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