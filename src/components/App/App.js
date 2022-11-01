import './App.css';
import Header from '../Header/Header.js';
import Promo from '../Promo/Promo.js';
import About from '../About/About.js';
import Tech from '../Tech/Tech.js';
import Profile from '../Profile/Profile.js';
import Portfolio from '../Portfolio/Portfolio.js';

function App() {
  return (
    <div className="app">
      <Header className="header">
      </Header>
      <Promo className="promo">
      </Promo>
      <About className="about">
      </About>
      <Tech className="tech">
      </Tech>
      <Profile className="profile">
      </Profile>
      <Portfolio className="portfolio">
      </Portfolio>
    </div>
  );
}

export default App;
