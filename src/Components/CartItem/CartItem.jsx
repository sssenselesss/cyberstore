import React, { useContext } from "react";
import { CartContext } from "../../pages/Root";
import PriceWithDiscount from "../../utils/PriceWithDiscount";

const CartItem = ({item}) => {
    const {removeCartItemById} = useContext(CartContext)
  return (
    <div className="modal-product">
      <div className="modal-product-image">
        <img
          src="https://i.playground.ru/p/WwocQXfjHLkOjaHg-URU0g.jpeg"
          alt=""
        />
      </div>

      <div className="discription-modal">
        <div className="modal-text">
          <span className="cart-title">{item.title} </span>
          <span className="cart-price"> {PriceWithDiscount(item.price,item.sale)} ₽. </span>
        </div>

        <button className="button" onClick={removeCartItemById.bind(this,item.id)}>Удалить</button>
      </div>
    </div>
  );
};

export default CartItem;
