import React from "react";
import footLogo1 from "../images/Vector.png";
import footLogo2 from "../images/Vector2.png";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLogo">
        <img className="footerLogo1" src={footLogo1} alt="logo" />
        <img className="footerLogo2" src={footLogo2} alt="logo" />
      </div>
      <div className="footerMenu">
        <ul className="footerUl">
          <li>Партнерам</li>
          <li>Разработчикам</li>
          <li>Вакансии</li>
        </ul>
      </div>
      <div className="copyright">ООО “интукод”, 2020г.</div>
    </div>
  );
};

export default Footer;
