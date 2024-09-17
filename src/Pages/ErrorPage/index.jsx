import React from "react";
import "./style.css";
import Logo from "../../Assets/Images/Logo.png";

const ErrorPage = () => {
  return (
    <div className="error-main">
      <img className="error-logo" src={Logo} />
      <h1 className="error-title">Error 404</h1>
      <h2 className="error-subtitle">
        Puxa... Não foi dessa vez que você conseguiu.
      </h2>
      <p className="error-text">
        Mas não desista! Ligue somente durante o programa, tá?
      </p>
      <h1 className="error-title">VALEU</h1>
    </div>
  );
};

export default ErrorPage;
