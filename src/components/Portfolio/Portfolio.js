import './Portfolio.css';
import React from 'react';
import { Link } from "react-router-dom";

export default function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <div className="portfolio__links">
                <Link className="portfolio__link">Статичный сайт<span className="arrow">&#129125;</span></Link>
                <Link className="portfolio__link">Адаптивный сайт<span className="arrow">&#129125;</span></Link>
                <Link className="portfolio__link">Одностраничное приложение<span className="arrow">&#129125;</span></Link>
            </div>
        </section >
    );
}