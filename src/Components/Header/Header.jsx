import { useContext } from "react"
import { ModalContext } from "../../pages/Root"
import Logo from "./Logo"


const Header = () =>{

    const {toggleModal} = useContext(ModalContext);

    return (
        <header className="header">
            <div className="wrapper">
                <ul className="nav">
                    <li>
                        <a href="">Главная</a>
                    </li>
                    <li>
                        <a href="">Каталог</a>
                    </li>
                    <li>
                        <a href="">Контакты</a>
                    </li>
                </ul>
                <Logo />
                
                <ul className="nav">
                    <li>
                        <a href="">Гарантии</a>
                    </li>
                    <li>
                        
                        
                        <span  onClick={toggleModal} href="">Корзина</span>
                    </li>
                    <li>
                        <a href="">Профиль</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header