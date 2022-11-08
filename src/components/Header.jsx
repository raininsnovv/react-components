import React from "react";
import logo_1 from "../images/Ellipse.png";
import logo_2 from "../images/ounter.png";
import "../css/header.css";
// import "../fonts/stylesheet.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="logo_1" alt="logo" src={logo_1}></img>'
        <img className="logo_2" alt="logo" src={logo_2}></img>
      </div>
      <div className="menu">
        <ul className="headerUl">
          <li>Главная</li>
          <li>О нас</li>
          <li>Контакты</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
