import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import "../css/app.css";
// import "../fonts/stylesheet.css";

const App = () => {
  return (
    <div className="app">
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
    </div>
  );
};

export default App;
