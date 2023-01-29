import React from "react";
import logo from "../../assets/logo.webp";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt={"Cassie Byington Art logo"} />
      </div>
      <nav>
        <h2>Home</h2>
        <h2>Gallery</h2>
        <h2>About</h2>
        <h2>Shop</h2>
      </nav>
    </header>
  );
};

export default Header;
