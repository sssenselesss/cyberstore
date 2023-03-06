const ProductPage = () => {
  return (
    <div className="productPage">
      <div className="product-images">
        <div className="main-image">
          <img
            src="https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/RU_CDProjektRED_W3NG_S1_2560x1440_2560x1440-60c81541dd379115ce6216812104f993"
            alt=""
          />
        </div>
        <div className="image-nails">
          <div className="image-nail">
            <img
              src="https://cdn.kanobu.ru/articles/pics/tmp/images/2023/3/4/bfdc59bd-a786-4c69-80f3-de2308f4510b.webp"
              alt=""
            />
          </div>
          <div className="image-nail">
            <img
              src="https://cdn.kanobu.ru/articles/pics/tmp/images/2023/3/4/bfdc59bd-a786-4c69-80f3-de2308f4510b.webp"
              alt=""
            />
          </div>
          <div className="image-nail">
            <img
              src="https://cdn.kanobu.ru/articles/pics/tmp/images/2023/3/4/bfdc59bd-a786-4c69-80f3-de2308f4510b.webp"
              alt=""
            />
          </div>
          <div className="image-nail">
            <img
              src="https://cdn.kanobu.ru/articles/pics/tmp/images/2023/3/4/bfdc59bd-a786-4c69-80f3-de2308f4510b.webp"
              alt=""
            />
          </div>
          <div className="image-nail">
            <img
              src="https://cdn.kanobu.ru/articles/pics/tmp/images/2023/3/4/bfdc59bd-a786-4c69-80f3-de2308f4510b.webp"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="product-discription">
        <span className="title">The Witcher III: Wild Hunt</span>
        <span className="discription-title">Описание</span>
        <p className="content">
          «Хогвартс. Наследие» – это захватывающая ролевая игра с открытым
          миром, который известен вам по книгам о Гарри Поттере. Отправляйтесь в
          путешествие, находите фантастических тварей, меняйте своего персонажа,
          варите зелья, изучайте заклинания, развивайте таланты, чтобы стать
          настоящим волшебником. 
          <br />
          <br />
          Станьте участником событий, которые
          разворачиваются на территории Хогвартса в 1800-х годах. Ваш персонаж –
          студент, владеющий ключом к древней тайне, которая способна разорвать
          волшебный мир на части. Находите союзников и сражайтесь с тёмными
          волшебниками, чтобы решить судьбу волшебного мира. Ваше наследие – это
          то, что вы делаете. Напишите свою собственную историю.
        </p>

        <div className="discription-lower">
          <div className="discription">
            <ul className="disc-ul">
              <li> <span className="grey">Жанр</span> Приключения </li>
              <li> <span className="grey">Язык</span> Русский </li>
              <li> <span className="grey">Дата выхода</span> 10 февраля 2023 </li>
              <li> <span className="grey">Издатель</span> Warner Bros. Games </li>
              <li> <span className="grey">Разработчик</span> Avalanche Software </li>
            </ul>
          </div>
          <div className="price-button">
            <div className="price-sale">
              <span className="price">1 890 ₽ </span>
              <div className="percent">10%</div>
            </div>
            <button className=" prodPage-button">В корзину</button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default ProductPage;
