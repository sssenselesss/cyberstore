
import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

import Header from "../Components/Header/Header";
import Modal from "../Components/Modal/Modal";

export const ModalContext = createContext(null);

const Root = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = setModal.bind(this, !modal);

    return (

        <ModalContext.Provider value={{ modal, toggleModal }} >
            <div className="layout">
                <Header />

                <main>
                    <Outlet />
                </main>
                <Modal />
                <Footer />
            </div>
        </ModalContext.Provider>
    )


}

export default Root; 