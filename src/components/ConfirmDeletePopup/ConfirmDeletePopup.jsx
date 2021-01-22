import React from "react";

import styles from './ConfirmDeletePopup.module.css';

class ConfirmDeletePopup extends React.Component {
  render() {
    const { isOpened, onCloseButtonClick, onDeleteButtonClick, title, type } = this.props;
    let content;
    if (type === 'confirm') {
      content = <>
        <h3 className={styles.title}>Подтвердите удаление</h3>
        <h2 className={styles.object}>{title}</h2>
        <button className={`${styles.delete_button} ${styles.button}`} onClick={onDeleteButtonClick}>Удалить</button>
        <button className={`${styles.cancel_button} ${styles.button}`} onClick={onCloseButtonClick}>Отмена</button>
      </> 
    } else if (type === 'ok') {
      content = <>
        <h3 className={styles.title}>Удалено</h3>
        <button className={`${styles.cancel_button} ${styles.button}`} onClick={onCloseButtonClick}>OK</button>
      </> 
    }
    return (
      <div className={isOpened ? `${styles.container} ${styles.container_opened}` : styles.container}>
        <div className={styles.popup}>
          <button className={styles.close_button} onClick={onCloseButtonClick} />
          {content}
        </div>
      </div>
    )
  }
}

export default ConfirmDeletePopup;
