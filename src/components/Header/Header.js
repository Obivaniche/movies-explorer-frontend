import logo from '../../images/logo.svg';
import './Header.css';
import React from 'react';
import { Link } from "react-router-dom";

function Header() {

    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Логотип" />
            <div className="header__navbar">
                <Link className="header__link">Регистрация</Link>
                <Link className="header__link header__link_enter">Войти</Link>
            </div>
        </header>
    );
}

export default Header;