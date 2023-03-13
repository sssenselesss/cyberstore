import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

import Header from "../Components/Header/Header";
import Modal from "../Components/Modal/Modal";
import useCart from "../hooks/UseCart";

export const ModalContext = createContext(null);
export const CartContext = createContext({});

const Root = () => {
  const [modal, setModal] = useState(false);

  const cart = useCart([]);

  const toggleModal = setModal.bind(this, !modal);

  return (
    <CartContext.Provider value={cart}>
      <ModalContext.Provider value={{ modal, toggleModal }}>
        <div className="layout">
          <Header />

          <main>
            <Outlet />
          </main>
          <Modal />
          <Footer />
        </div>
      </ModalContext.Provider>
    </CartContext.Provider>
  );
};

export default Root;
