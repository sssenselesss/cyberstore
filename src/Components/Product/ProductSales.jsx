import { EpicIcon, OriginIcon, SteamIcon } from "../../Icons/Icons";

const ProductSales = () => {
  return (
    <div className="product">
      <div className="prodImage">
        <img
          src="https://upload.wikimedia.org/wikipedia/ru/thumb/9/93/Horizon_Zero_Dawn.jpg/640px-Horizon_Zero_Dawn.jpg"
          alt=""
        />
        <div className="percent">10%</div>
      </div>
      <span className="prod-title">Horizon Zero Dawn</span>
      <div className="prod-icons">
        <OriginIcon />
        <EpicIcon />
        <SteamIcon />
      </div>
      <div className="price-button">
        <span className="price">2 022 ₽</span>
        <button className="button">В корзину</button>
      </div>
    </div>
  );
};

export default ProductSales;
