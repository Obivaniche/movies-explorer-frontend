import './About.css';
import React from 'react';

export default function About() {
    return (
        <section className="about">
            <h2 className="about__title">О&nbsp;проекте</h2>
            <div className="about__container">
                <article className="info">
                    <h3 className="info__title">Дипломный проект включал 5&nbsp;этапов</h3>
                    <p className="info__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
                </article>
                <article className="info">
                    <h3 className="info__title">На&nbsp;выполнение диплома ушло 5&nbsp;недель</h3>
                    <p className="info__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </article>
            </div>
            <div className="about__time-line">
                    <div className="about__back">
                        <span className="about__duration-back">1&nbsp;неделя</span>
                        <span className="about__sign">Back-end</span>
                    </div>
                    <div className="about__front">
                        <span className="about__duration-front">4&nbsp;недели</span>
                        <span className="about__sign">Front-end</span>
                    </div>
                </div>
        </section>
    );
}