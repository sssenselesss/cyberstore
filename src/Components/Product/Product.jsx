import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { EpicIcon, OriginIcon, SteamIcon } from "../../Icons/Icons";
import { CartContext } from "../../pages/Root";
import FormatPercent from "../../utils/FormatPercent";
import PriceWithDiscount from "../../utils/PriceWithDiscount";

const Product = (props) => {

  const {addToCart} = useContext(CartContext)


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

        {PriceWithDiscount(props.prod.price,props.prod.sale) } ₽. 
           </span>
        <button className="button" onClick={addToCart.bind(this,props.prod)}>В корзину</button>
      </div>
    </div>
  );
};

export default Product;
