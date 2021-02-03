import React from "react";

import styles from './ConfirmImageDeletePopup.module.css';

class ConfirmImageDeletePopup extends React.Component {
  render() {
    const { onCloseButtonClick, onDeleteButtonClick, image, type } = this.props;
    let content;
    if (type === 'confirm') {
      content = <>
        <h3 className={styles.title}>Подтвердите удаление</h3>
        <img className={styles.image} src={image} alt="Изображение к удалению" />
        <div className={styles.button_block}>
          <button className={`${styles.delete_button} ${styles.button}`} onClick={onDeleteButtonClick}>Удалить</button>
          <button className={`${styles.cancel_button} ${styles.button}`} onClick={onCloseButtonClick}>Отмена</button>
        </div>
      </> 
    } else if (type === 'ok') {
      content = <>
        <h3 className={styles.title}>Удалено</h3>
        <button className={`${styles.cancel_button} ${styles.button}`} onClick={onCloseButtonClick}>OK</button>
      </> 
    }
    return (
      <div className={`${styles.container} ${styles.container_opened}`}>
        <div className={styles.popup}>
          <button className={styles.close_button} onClick={onCloseButtonClick} />
          {content}
        </div>
      </div>
    )
  }
}

export default ConfirmImageDeletePopup;
