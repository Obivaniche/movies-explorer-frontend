import './Tech.css';
import React from 'react';


export default function Tech() {
    return (
        <section className="tech">
            <h2 className="tech__title">Технологии</h2>
            <article className="tech__info">
                <h3 className="tech__subtitle">7 технологий</h3>
                <p className="tech__main-text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </article>
            <div className="tech__container">
                <p className="tech__card-text">HTML</p>
                <p className="tech__card-text">CSS</p>
                <p className="tech__card-text">JS</p>
                <p className="tech__card-text">React</p>
                <p className="tech__card-text">Git</p>
                <p className="tech__card-text">Express.js</p>
                <p className="tech__card-text">mongoDB</p>
            </div>
        </section>
    );
}