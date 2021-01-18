import React from "react";

import styles from './EditPopup.module.css';

class EditPopup extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.popup}>
          <button className={styles.close_button} />
          <h3 className={styles.title}>Редактировать новость</h3>
          <form className={styles.form} name="edit">
            <label className={styles.label}>Заголовок</label>
            <input className={styles.input} name="label" type="text" />

            <label className={styles.label}>Текст</label>
            <textarea className={styles.input} name="label" type="text" />

            <label className={styles.label}>Изображение</label>
            <input className={styles.input} name="label" type="file" />

            <input className={styles.submit} name="submit" type="submit" value="Применить" />
          </form>
        </div>
      </div>
    )
  }
}

export default EditPopup;
