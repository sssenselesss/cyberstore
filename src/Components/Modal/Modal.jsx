import { useContext, useRef } from "react";
import { CartContext, ModalContext } from "../../pages/Root";
import FormatMoney from "../../utils/FormatMoney";
import TotalCart from "../../utils/TotalCart";
import CartItem from "../CartItem/CartItem";

const Modal = () => {
  const { modal, toggleModal } = useContext(ModalContext);

  const cart = useContext(CartContext);

  const total = TotalCart(cart.cartItems);
  

  const overlayRef = useRef();

  const close = (e) => {
    if (e.target === overlayRef.current) {
      toggleModal();
    }
  };
  return (
    // modal && active
    <section
      onClick={(e) => close(e)}
      ref={overlayRef}
      className={`overlay ${modal ? "active" : ""}`}
    >
      <div className="modal">
        <header className="modal-header">
          <span>Корзина</span>
        </header>

        <div className="modal-body">
         
          {cart.cartItems.map((item) =>{
            return <CartItem key={item.id} item={item} />
          })}
      
        </div>

        <div className="modal-footer">
          <div className="total-price">
            <span className="total">Итого:</span>
            <span className="price">{FormatMoney(total)} </span>
          </div>

          <button className="button">Оформить заказ</button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
