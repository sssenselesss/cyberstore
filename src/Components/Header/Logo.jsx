import { NavLink } from "react-router-dom";
import logo from './../../assets/Logo.png'
const Logo = () => {
  return (
    <NavLink to={"/"}>
      <div className="logo">
        <div className="imageLogo">
          <img src={logo} alt="" />
        </div>
        <h3 className="header-title">CyberStore</h3>
      </div>
    </NavLink>
  );
};

export default Logo;
