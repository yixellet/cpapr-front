import React from "react";

import styles from '../../CommonTextBlock/CommonTextBlock.module.css';

class Glonass extends React.Component {
  render() {
    return (
      <div className={styles.history}>
        {/* <img className={styles.image} alt='картинка'/> */}
        <p className={styles.text}>Образованный в 2019 году отдел мониторинга транспорта 
        занимается ведением региональной навигационной информационной системы 
        Астраханской области на базе технологии ГЛОНАСС/GPS. Внедрение данной технологии 
        обеспечивает предоставление оперативной, актуальной, комплексной информации 
        по таким направлениям как транспортное обеспечение населения, 
        передвижение школьных автобусов, перевозка опасных грузов, служба скорой помощи, 
        МЧС, ЖКХ и ведомственный автотранспорт Правительства Астраханской области.</p>
        <a target="_blank" rel="noreferrer noopener" className={styles.link} href="https://aoglonass30.ru">https://aoglonass30.ru</a>
      </div>
    )
  }
}

export default Glonass;
