import image from '../../images/image.jpg';
import './Profile.css';
import React from 'react';
import { Link } from "react-router-dom";

export default function Profile() {
    return (
        <section className="profile">
            <h2 className="profile__title">Студент</h2>
            <article className="profile__container">
                <img className="profile__image" src={image} alt="Фото" />
                <h3 className="profile__name">Владислав</h3>
                <p className="profile__info">Фронтенд-разработчик, 31&nbsp;год</p>
                <p className="profile__info">Я&nbsp;живу в&nbsp;прекрасном и&nbsp;пасмурном Санкт-Петербурге. Закончил электротехнический факультет СПБГУАП. Люблю слушать музыку и&nbsp;не&nbsp;люблю мокнуть под дождем. Кодить я&nbsp;начал еще в&nbsp;школе, но&nbsp;профессией кодинг стал совсем недавно. Работая в&nbsp;компанни BLIZKO.RU контент-редактором, я&nbsp;понял, что хочу быть фронтенд-разработчиком. И&nbsp;вуаля. Спасибо, Яндекс.Практикум!</p>
            </article>
            <div className="profile__links">
                <Link className="profile__link">LinkedIn</Link>
                <Link className="profile__link">Github</Link>
            </div>
        </section>
    );
}