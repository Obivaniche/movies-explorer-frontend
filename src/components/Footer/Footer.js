import './Footer.css';
import React from 'react';
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <section className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__container">
            <div className="footer__links">
                <Link className="footer__link">Яндекс.Практикум</Link>
                <Link className="footer__link">Github</Link>
            </div>
            <p className="footer__copyright">&copy;2022</p>
            </div>
        </section >
    );
}