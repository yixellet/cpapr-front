import React from "react";

import styles from '../../CommonTextBlock/CommonTextBlock.module.css';

class Rfpd extends React.Component {
  render() {
    return (
      <div className={styles.history}>
        <img className={styles.image} alt='картинка'/>
        <p className={styles.text}><span className={styles.accent}>Выделенный текст</span> Обычный текст. Администрацией Астраханской области был создан 
          «Научно-исследовательский геоинформационный центр» (НИГИЦ) Астраханской области.</p>
      </div>
    )
  }
}

export default Rfpd;
