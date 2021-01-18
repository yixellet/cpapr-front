import React from "react";

import styles from '../../CommonTextBlock/CommonTextBlock.module.css';

class Education extends React.Component {
  render() {
    return (
      <div className={styles.history}>
        {/* <img className={styles.image} alt='картинка'/> */}
        <p className={styles.text}>ГАУ АО «ЦПАПР» активно сотрудничает 
        с образовательными учреждениями города. Ежегодно у нас проходят практику 
        или стажировку студенты Астраханского государственного университета 
        и Астраханского государственного архитектурно-строительного университета. 
        Сотрудники учреждения проводят лекции и семинары по вопросам управления 
        земельными ресурсами, территориального землеустройства, кадастра недвижимости и др.</p>
      </div>
    )
  }
}

export default Education;
