import { NavLink } from "react-router-dom";
import { EpicIcon, OriginIcon, SteamIcon } from "../../Icons/Icons";
import FormatMoney from "../../utils/FormatMoney";
import FormatPercent from "../../utils/FormatPercent";
import PriceWithDiscount from "../../utils/PriceWithDiscount";

const Product = (props) => {

  let path = '/products/' + props.prod.id;
  return (
    <div className={`product ${props.prod.sale === null ? "" : "sale"}`}>
      <div className="prodImage">
        <img
          src={props.prod.image}
          alt=""
        />
        <div className="percent">
          {FormatPercent(props.prod.sale)}</div>
      </div>

      <NavLink to={path}  className="prod-title">
        {props.prod.title}
      </NavLink>

      
      <div className="prod-icons">
        <OriginIcon />
        <EpicIcon />
        <SteamIcon />
      </div>
      <div className="price-button">
        <span className="price">

        {PriceWithDiscount(props.prod.price,props.prod.sale)}
           </span>
        <button className="button">В корзину</button>
      </div>
    </div>
  );
};

export default Product;
