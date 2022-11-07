import image from '../../images/image.jpg';
import './Profile.css';
import React from 'react';
import { Link } from "react-router-dom";

export default function Profile() {
    return (
        <section className="profile">
            <h2 className="profile__title">Студент</h2>
            <div className="profile__container">
                <img className="profile__image" src={image} alt="Фото" />
                <div>
                    <div className="profile__bio">
                        <h3 className="profile__name">Владислав</h3>
                        <p className="profile__short-info">Фронтенд-разработчик, 31&nbsp;год</p>
                        <p className="profile__full-info">Я&nbsp;живу в&nbsp;прекрасном и&nbsp;пасмурном Санкт-Петербурге. 
                        Закончил СПБГУАП. Люблю слушать музыку и&nbsp;не&nbsp;люблю дожд,. Кодить я&nbsp;начал еще в&nbsp;школе, 
                        но&nbsp;профессией это стало совсем недавно. Работая в&nbsp;компанни BLIZKO.RU контент-редактором, 
                        я&nbsp;понял, что хочу быть фронтенд-разработчиком. И&nbsp;вуаля. Спасибо, Яндекс.Практикум!</p>
                    </div>
                    <div className="profile__links">
                        <Link className="profile__link">LinkedIn</Link>
                        <Link className="profile__link">Github</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}