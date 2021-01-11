import React from "react";
import PageTitle from '../PageTitle/PageTitle';

import styles from './Contacts.module.css';

class Contacts extends React.Component {
  render() {
    return (
      <main className={styles.background}>
        <section className={styles.content}>
        <PageTitle name="Контакты"/>
        <iframe title="map" className={styles.map} src="https://yandex.ru/map-widget/v1/?um=constructor%3A1c5c3ba3f9a4fce778a6de2c3c46667b38fdd26c985d98a4ba94527b5be8b4e3&amp;source=constructor" frameBorder="0"></iframe>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.table__row}>
              <th className={styles.table__accent}>Адрес:</th>
              <td className={styles.table__cell}><p className={styles.table__text}>Астраханская область, город Астрахань, ул. Набережная 1 Мая, 75 / ул. Шаумяна, 48, этаж 5</p></td>
            </tr>
            <tr className={styles.table__row}>
              <th className={styles.table__accent}>Телефоны:</th>
              <td className={styles.table__cell}>
                <p className={styles.table__text}>8 (8512) 66-74-00 - директор</p>
                <p className={styles.table__text}>8 (8512) 66-74-60 - приемная</p>
                <p className={styles.table__text}>8 (8512) 66-74-56 - бухгалтерия</p>
                <p className={styles.table__text}>8 (8512) 66-74-62 - юрист</p>
                <p className={styles.table__text}>8 (8512) 66-74-61 - отдел пространственных данных</p>
                <p className={styles.table__text}>8 (8512) 66-74-57 - отдел геоинформационных систем и IT-технологий</p>
                <p className={styles.table__text}>8 (8512) 66-74-58 - отдел геоинформационных систем и IT-технологий</p>
                <p className={styles.table__text}>8 (8512) 66-74-59 - отдел мониторинга транспорта</p>
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
        </section>
      </main>
    )
  }
}

export default Contacts;
