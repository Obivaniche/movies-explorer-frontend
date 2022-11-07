import './Portfolio.css';
import React from 'react';

export default function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <div className="portfolio__links">
                <a className="portfolio__link" href="https://obivaniche.github.io/how-to-learn/" target="_blank"
                        rel="noopener noreferrer">Статичный сайт<span className="arrow">&#129125;</span></a>
                <a className="portfolio__link" href="https://obivaniche.github.io/russian-travel/" target="_blank"
                        rel="noopener noreferrer">Адаптивный сайт<span className="arrow">&#129125;</span></a>
                <a className="portfolio__link" href="https://obivaniche.github.io/mesto/" target="_blank"
                        rel="noopener noreferrer">Одностраничное приложение<span className="arrow">&#129125;</span></a>
            </div>
        </section >
    );
}