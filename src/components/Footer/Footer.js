import './Footer.css';
import React from 'react';

export default function Footer() {
    return (
        <section className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__container">
                <div className="footer__links">
                    <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank"
                        rel="noopener noreferrer">Яндекс.Практикум</a>
                    <a className="footer__link" href="https://github.com/Obivaniche" target="_blank"
                        rel="noopener noreferrer">Github</a>
                </div>
                <p className="footer__copyright">&copy;2022</p>
            </div>
        </section >
    );
}