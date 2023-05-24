import React from "react";
import HeaderCartButton from "./HeaderCartButton";
// import classes from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <header>
        <h1>Shoe Commerce Platform</h1>
        <HeaderCartButton />
      </header>
    </div>
  );
};

export default Header;
