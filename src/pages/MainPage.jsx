import { useEffect, useState } from "react";
import Product from "../Components/Product/Product";
import ProductSales from "../Components/Product/ProductSales";
import App from "../Components/Slider/App";
import PRODUCTS from "../data/products";

const MainPage = () => {
  const [products, setProducts] = useState(PRODUCTS);
  const [query, setQuery] = useState("");

  const discontProducts = PRODUCTS.filter((item) => item.sale !== null)

  const onChangeQuery = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(query)
  );
  console.log(filteredProducts);

  return (
    <div className="main">
      <div className="slider">
        <App />
      </div>

      <div className="catalog">
        <div className="wrapper">
          <div className="search">
            <div className="search-field">
              <div className="icon-search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-search"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="10" cy="10" r="7" />
                  <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Поиск по названию"
                onChange={(e) => onChangeQuery(e)}
                value={query}
              />
            </div>
          </div>

          <div className="products">
            {filteredProducts.length ? (
              filteredProducts.map((prod) => {
                return <Product prod={prod} />;
              })
            ) : (
              <h2 className="nothing">По вашему запросу "{query}" ничего не найдено </h2>
            )}
          </div>
        </div>
      </div>

      <div className="sales">
        <div className="wrapper">
          <h1 className="mb65">Скидки недели</h1>
          <div className="sales-products">
              {discontProducts.map((prod) =>{
                return <Product prod={prod}/>
              })}
          </div>
        </div>
      </div>

      <div className="distribution">
        <span className="title">Будь в курсе всех акций</span>
        <span className="subtitle">
          Подпишись на электроннаую рассылку и узнавай об акциях заранее
        </span>
        <div className="field">
          <input type="text" />
          <button className="button">Подписаться</button>
        </div>

        <span className="oferta">
          Нажимая на кнопку «Подписаться», вы соглашаетесь с офертой и политикой
          конфиденциальности
        </span>
      </div>
    </div>
  );
};

export default MainPage;
