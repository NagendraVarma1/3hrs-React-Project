import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div>
      <header className={classes.header}>
        <h1>Shoe Commerce Platform</h1>
        <HeaderCartButton openCart={props.openCart}/>
      </header>
    </div>
  );
};

export default Header;
