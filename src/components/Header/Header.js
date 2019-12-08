import React from "react";

import Logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} className="logo" alt={Logo} />
    </div>
  );
};

export default Header;
