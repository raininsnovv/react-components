import React from "react";
import "../css/maincontent.css";

const MainContent = () => {
  return (
    <div className="mainContent">
      <div className="number">140</div>
      <div className="buttons">
        <button>Увеличить</button>
        <button>Уменьшить</button>
        <button>Сбросить</button>
      </div>
    </div>
  );
};

export default MainContent;
