import Logo from "./Logo"


const Header = () =>{
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
                        <a href="">Корзина</a>
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