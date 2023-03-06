import Logo from "../Header/Logo";

const Footer = () => {
  return (
    <footer className="footer">
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
    </footer>
  );
};

export default Footer;
