import React from "react";
import "../../css/header.css";
import logoMain from "../../img/header/logo.svg";
import Search from "./Search";
import cartIcon from '../../img/header/cart.svg'
import Menu from "./Menu";

const Header = () => {
  return (
    <div>
        <div className="header-top">
            <img className="logo" src={logoMain} alt="logo" />
            <Search />
            <div className="right-content">
                <a href="/">
                    <p>Regístrate</p>
                </a>
                <a href="/">
                    <p>Mi cuenta</p>
                </a>
                <div className="cart-icon">
                    <img src={cartIcon} alt="cart" />
                </div>
            </div>
        </div>
        <Menu />
    </div>
  );
};

export default Header;
