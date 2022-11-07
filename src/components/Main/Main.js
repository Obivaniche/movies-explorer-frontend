
import './Main.css';
import Promo from '../Promo/Promo.js';
import About from '../About/About.js';
import Tech from '../Tech/Tech.js';
import Profile from '../Profile/Profile.js';
import Portfolio from '../Portfolio/Portfolio.js';

export default function Main() {
    return (
        <main className="main">
            <Promo />
            <About />
            <Tech />
            <Profile />
            <Portfolio />
        </main>
    );
}