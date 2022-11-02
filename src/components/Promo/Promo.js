import './Promo.css';
import React from 'react';
import { Link } from "react-router-dom";

export default function Promo() {
  return (
    <section className="promo">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <div className="promo__navbar">
          <Link className="promo__link">О проекте</Link>
          <Link className="promo__link">Технологии</Link>
          <Link className="promo__link">Студент</Link>
        </div>
    </section>
  );
}
