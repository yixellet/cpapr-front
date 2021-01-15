import React from "react";

import styles from '../../CommonTextBlock/CommonTextBlock.module.css';
import r from '../../../images/1920px-Agnivo.jpg';

class Databases extends React.Component {
  render() {
    return (
      <div className={styles.history}>
        <img className={styles.image} src={r} alt='картинка'/>
        <p className={styles.text}><span className={styles.accent}>Выделенный текст</span> Обычный текст. Администрацией Астраханской области был создан 
          «Научно-исследовательский геоинформационный центр» (НИГИЦ) Астраханской области.</p>
        <ul className={styles.list}>Список можно озаглавить обычным, а можно <span className={styles.accent}>выделенным </span>текстом:
          <li className={styles.listItem}>Обычный пункт</li>
          <li className={styles.listItem}><span className={styles.accent}>Выделенный пункт</span></li>
        </ul>
        <p className={styles.text}>И еще немного обычного текста. Так мы оформляем ссылки: <a className={styles.link} href='https://minprom.astrobl.ru/' target="_blank" rel="noreferrer noopener">Сайт Минпрома</a>, например</p>
      </div>
    )
  }
}

export default Databases;
