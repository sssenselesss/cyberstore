import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PRODUCTS from "../data/products";
import FormatPercent from "../utils/FormatPercent";
import PriceWithDiscount from "../utils/PriceWithDiscount";

const ProductPage = () => {
  const { id } = useParams();
 

  


      const singleProduct = PRODUCTS.find((item) => item.id == id);
      const [prod, setProd] = useState(singleProduct);

  

    console.log(prod);

  return (
    <div className="productPage">
      <div className="product-images">
        <div className="main-image">
          <img
            src={prod.image}
            alt=""
          />
        </div>
      </div>

      <div className="product-discription">
        <span className="title">{prod.title}</span>
        <span className="discription-title">Описание</span>
        <p className="content">
         {prod.content}
        </p>

        <div className="discription-lower">
          <div className="discription">
            <ul className="disc-ul">
              <li>
                {" "}
                <span className="grey">Жанр</span> Приключения{" "}
              </li>
              <li>
                {" "}
                <span className="grey">Язык</span> Русский{" "}
              </li>
              <li>
                {" "}
                <span className="grey">Дата выхода</span> 10 февраля 2023{" "}
              </li>
              <li>
                {" "}
                <span className="grey">Издатель</span> Warner Bros. Games{" "}
              </li>
              <li>
                {" "}
                <span className="grey">Разработчик</span> Avalanche Software{" "}
              </li>
            </ul>
          </div>
          <div className="price-button">
            <div className="price-sale">
              <span className="price"> {PriceWithDiscount(prod.price,prod.sale)} </span>
              <div className="percent">{FormatPercent(prod.sale)}</div>
            </div>
            <button className=" prodPage-button">В корзину</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
