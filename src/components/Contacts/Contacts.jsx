import React from "react";
import PageTitle from '../PageTitle/PageTitle';

import mainBlockStyles from '../CommonMainBlock/CommonMainBlock.module.css';
import styles from './Contacts.module.css';

import astrobl_logo from '../../images/logo_astrobl.png';
import minprom_logo from '../../images/logo_minprom.png';

class Contacts extends React.Component {
  render() {
    return (
      <main className={mainBlockStyles.background}>
        <section className={mainBlockStyles.content}>
        <PageTitle name="Контакты"/>
        <iframe title="map" 
          className={styles.map} 
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A1c5c3ba3f9a4fce778a6de2c3c46667b38fdd26c985d98a4ba94527b5be8b4e3&amp;source=constructor" 
          frameBorder="0">
        </iframe>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.table__row}>
              <th className={styles.table__accent}>Адрес:</th>
              <td className={styles.table__cell}><p className={styles.table__text}>Астраханская область, город Астрахань, ул. Набережная 1 Мая, 75 / ул. Шаумяна, 48, этаж 5</p></td>
            </tr>
            <tr className={styles.table__row}>
              <th className={styles.table__accent}>Телефоны:</th>
              <td className={styles.table__cell}>
                <div className={styles.table__textcontainer}>
                  <p className={styles.table__text}>8 (8512) 66-74-00</p>
                  <p className={styles.table__text}>директор</p>
                </div>
                <div className={styles.table__textcontainer}>
                  <p className={styles.table__text}>8 (8512) 66-74-60</p>
                  <p className={styles.table__text}>приемная</p>
                </div>
                <div className={styles.table__textcontainer}>
                  <p className={styles.table__text}>8 (8512) 66-74-56</p>
                  <p className={styles.table__text}>бухгалтерия</p>
                </div>
                <div className={styles.table__textcontainer}>
                  <p className={styles.table__text}>8 (8512) 66-74-62</p>
                  <p className={styles.table__text}>юридический отдел</p>
                </div>
                <div className={styles.table__textcontainer}>
                  <p className={styles.table__text}>8 (8512) 66-74-61</p>
                  <p className={styles.table__text}>отдел пространственных данных</p>
                </div>
                <div className={styles.table__textcontainer}>
                  <p className={styles.table__text}>8 (8512) 66-74-57</p>
                  <p className={styles.table__text}> отдел геоинформационных систем и IT-технологий</p>
                </div>
                <div className={styles.table__textcontainer}>
                  <p className={styles.table__text}>8 (8512) 66-74-58</p>
                  <p className={styles.table__text}> отдел геоинформационных систем и IT-технологий</p>
                </div>
                <div className={styles.table__textcontainer}>
                  <p className={styles.table__text}>8 (8512) 66-74-59</p>
                  <p className={styles.table__text}> отдел мониторинга транспорта</p>
                </div>
              </td>
            </tr>
            <tr className={styles.table__row}>
              <th className={styles.table__accent}>E-mail:</th>
              <td className={styles.table__cell}><p className={styles.table__text}>gisaogp@mail.ru</p></td>
            </tr>
            <tr className={styles.table__row}>
              <th className={styles.table__accent}>Время работы:</th>
              <td className={styles.table__cell}><p className={styles.table__text}>пн-пт с 8:30 до 17:30, обед с 12:00 до 13:00, сб-вс - выходной</p></td>
            </tr>
          </tbody>
        </table>
        <a href='https://astrobl.ru' target="_blank" rel="noreferrer noopener"><img className={styles.external_link} src={astrobl_logo} alt='Логотип сайта Астраханской области' /></a>
        <a href='https://minprom.astrobl.ru' target="_blank" rel="noreferrer noopener"><img className={styles.external_link} src={minprom_logo} alt='Логотип сайта Министерства промышленности Астраханской области' /></a>
        </section>
      </main>
    )
  }
}

export default Contacts;
