
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

import Header from "../Components/Header/Header";

const Root = () =>{
    return(
        <div className="layout">
            <Header />

            <main>
             <Outlet />
            </main>

            <Footer />
        </div>
    )


}

export default Root; 