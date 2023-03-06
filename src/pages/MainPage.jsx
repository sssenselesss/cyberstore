import App from "../Components/Slider/App";
import { EpicIcon, OriginIcon, SteamIcon } from "../Icons/Icons";

const MainPage = () => {
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
              <input type="text" placeholder="Поиск по названию"/>
            </div>
          </div>

          <div className="products">
              <div className="product">
                  <div className="prodImage">
                      <img src="" alt="" />
                  </div>
                  <span className="prod-title"></span>
                  <div className="prod-icons">
                      <OriginIcon />
                      <EpicIcon />
                      <SteamIcon />
                  </div>
                  <div className="price-button">
                      <span className="price"></span>
                      <button>В корзину</button>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
