import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PRODUCTS from "../../data/products";
import { EpicIcon, OriginIcon, SteamIcon } from "../../Icons/Icons";
import { CartContext } from "../../pages/Root";
import StorageService from "../../services/StorageService";
import FormatPercent from "../../utils/FormatPercent";
import PriceWithDiscount from "../../utils/PriceWithDiscount";

const Product = (props) => {
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(props.prod || {});

  let path = "/products/" + props.prod.id;
  

  // useEffect(() => {
  //   if (!StorageService.isNull("cart")) {
  //     const cartItems = StorageService.get("cart");

  //     const cartItemIds = cartItems.map((item) => item.id);

  //     cartItemIds.forEach((item) => {
  //       if (props.prod.id === item) {
  //         console.log(123);
  //         setProduct((prev) => ({ ...prev, isCart: true }));
  //       }
  //     });
  //   }
  // }, []);

  return (
    <div className={`product ${props.prod.sale === null ? "" : "sale"}`}>
      <div className="prodImage">
        <img src={props.prod.image} alt="" />
        <div className="percent">{FormatPercent(props.prod.sale)}</div>
      </div>

      <NavLink to={path} className="prod-title">
        {props.prod.title}
      </NavLink>

      <div className="prod-icons">
        <OriginIcon />
        <EpicIcon />
        <SteamIcon />
      </div>
      <div className="price-button">
        <span className="price">
          {PriceWithDiscount(props.prod.price, props.prod.sale)} ₽.
        </span>

       
        <button className="button" onClick={addToCart.bind(this, props.prod)}>
          В корзину
        </button>
      </div>
    </div>
  );
};

export default Product;
