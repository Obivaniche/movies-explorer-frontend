import logo from '../../images/logo.svg';
import './Header.css';
import React from 'react';
import { Link, Switch, Route } from "react-router-dom";

function Header() {

    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Логотип" />
            <Switch>
                <Route exact path="/">
                    <div className="header__navbar">
                        <Link className="header__link" to="sign-up">Регистрация</Link>
                        <Link className="header__link header__link_enter" to="sign-in">Войти</Link>
                    </div>
                </Route>
            </Switch>
        </header>
    );
}

export default Header;