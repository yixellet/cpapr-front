import React from "react";
import './Footer.css';
import Logo from '../Logo/Logo';

class Footer extends React.Component {
  render() {
    return (   
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__cgt">
            <Logo />
            <p className="footer__name">Государственное автономное учреждение Астраханской области "Центр пространственной аналитики и промышленного развития",<br />2020</p>
          </div>
          <p className="footer__contacts">г. Астрахань, ул. Набережная 1 Мая, 75<br />8 (8512) 66-74-00<br />gisaogp@mail.ru</p>
        </div>
      </footer>
    )
  }
}

export default Footer;
