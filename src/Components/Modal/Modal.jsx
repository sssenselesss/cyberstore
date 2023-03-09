import { useContext, useRef } from "react";
import { ModalContext } from "../../pages/Root";

const Modal = () => {
  const { modal, toggleModal } = useContext(ModalContext);

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
          <h2>Корзина</h2>
        </header>

        <div className="modal-body">
          <div className="modal-product">
            <div className="modal-product-image">
              <img
                src="https://i.playground.ru/p/WwocQXfjHLkOjaHg-URU0g.jpeg"
                alt=""
              />
            </div>

            <div className="discription-modal">
              <div className="modal-text">
                <span className="cart-title">The Witcher III: Wild Hunt </span>
                <span className="cart-price">2 202 ₽ </span>
              </div>

              <button className="button">Удалить</button>
            </div>
          </div>
          <div className="modal-product">
            <div className="modal-product-image">
              <img
                src="https://i.playground.ru/p/WwocQXfjHLkOjaHg-URU0g.jpeg"
                alt=""
              />
            </div>

            <div className="discription-modal">
              <div className="modal-text">
                <span className="cart-title">The Witcher III: Wild Hunt </span>
                <span className="cart-price">2 202 ₽ </span>
              </div>

              <button className="button">Удалить</button>
            </div>
          </div>
          <div className="modal-product">
            <div className="modal-product-image">
              <img
                src="https://i.playground.ru/p/WwocQXfjHLkOjaHg-URU0g.jpeg"
                alt=""
              />
            </div>

            <div className="discription-modal">
              <div className="modal-text">
                <span className="cart-title">The Witcher III: Wild Hunt </span>
                <span className="cart-price">2 202 ₽ </span>
              </div>

              <button className="button">Удалить</button>
            </div>
          </div>
          <div className="modal-product">
            <div className="modal-product-image">
              <img
                src="https://i.playground.ru/p/WwocQXfjHLkOjaHg-URU0g.jpeg"
                alt=""
              />
            </div>

            <div className="discription-modal">
              <div className="modal-text">
                <span className="cart-title">The Witcher III: Wild Hunt </span>
                <span className="cart-price">2 202 ₽ </span>
              </div>

              <button className="button">Удалить</button>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <div className="total-price">
            <span className="total"></span>
            <span className="price"></span>
          </div>

          <button className="button">Оформить заказ</button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
