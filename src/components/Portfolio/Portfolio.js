import React from 'react';
import MainStack from '../MainStack/MainStack';
import avatar from '../../images/avatar.jpg';

function Portfolio () {

    const text = {
        name: 'Владислав',
        profession: 'Фронтенд-разработчик, 31 год',
        about: `Я живу в прекрасном и пасмурном Санкт-Петербурге, закончил факультет электротехники С-ПбГУАП. 
        Я люблю слушать музыку, и не люблю, когда идет дождь, а ещё увлекаюсь авто и велоспортом. 
        Кодить начал еще в старшей школе, но дальше учебной программы это не заходило. Но после того, как прошёл курс по веб-разработке от Яндекс.Практикум, 
        начал заниматься разработкой всерьез и сделал это своей профессией.`,
        link1: 'https://www.linkedin.com/in/smirnov-v-v/',
        link2: 'https://github.com/Obivaniche',
        titleItem: 'Портфолио',
        item1: 'Статичный сайт',
        linkStatic: 'https://obivaniche.github.io/how-to-learn/',
        item2: 'Адаптивный сайт',
        linkAdaptive: 'https://obivaniche.github.io/russian-travel/',
        item3: 'Одностраничное приложение',
        linkSinglePageApp: 'https://obivaniche.github.io/mesto/'
    }
    
    return (
        <div className="student">
            <MainStack stackName = {'Студент'} id ='Студент'>
            <section className="portfolio">
                    <div className="portfolio__space">
                        <div className="portfolio__info">
                            <h1 className="portfolio__title">{text.name}</h1>
                            <p className="portfolio__subtitle">{text.profession}</p>
                            <p className="portfolio__about">{text.about}</p>
                            <div className="portfolio__description">
                                <a
                                    className="portfolio__link" 
                                    href={text.link1}
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    className="portfolio__link"
                                    href={text.link2}
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    Github
                                </a>
                            </div>
                            <p className="portfolio__title-item">{text.titleItem}</p>
                            <div className="portfolio__item">
                                <a className="portfolio__item-web"
                                href = {text.linkStatic}
                                target="_blank" rel="noopener noreferrer">{text.item1}</a>
                                <a
                                    href = {text.linkStatic}
                                    target="_blank" rel="noopener noreferrer"
                                    className="portfolio__item-web"
                                >
                                    ↗
                                </a>
                            </div>
                            <div className="portfolio__item">
                                <a className="portfolio__item-web"
                                href = {text.linkAdaptive}
                                target="_blank" rel="noopener noreferrer">{text.item2}</a>
                                <a 
                                    href = {text.linkAdaptive}
                                    target="_blank" rel="noopener noreferrer"
                                    className="portfolio__item-web"
                                >
                                    ↗
                                </a>
                            </div>
                            <div className="portfolio__item">
                                <a className="portfolio__item-web"
                                href = {text.linkSinglePageApp}
                                target="_blank" rel="noopener noreferrer">{text.item3}</a>
                                <a 
                                    href = {text.linkSinglePageApp}
                                    target="_blank" rel="noopener noreferrer"
                                    className="portfolio__item-web"
                                >
                                    ↗
                                </a>
                            </div>
                            <div className = "portfolio__holder">
                            <div className = "portfolio__round">
                                <img 
                                    className="portfolio__avatar"
                                    src={avatar}
                                    alt="Аватар пользователя"
                                />
                            </div> 
                        </div>
                        </div>
                        
                    </div>
                </section>
            </MainStack>
        </div>
    );
}

export default Portfolio;