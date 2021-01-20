import React from "react";

import styles from './EditPopup.module.css';

class EditPopup extends React.Component {
  handleCreateNewItem(title, text, image) {
    this.props.api.createNewItem(title, text, image)
      .then((data) => {
        console.log(data)
      })
  }

  render() {
    const { isOpened, onCloseButtonClick, type } = this.props;
    let title;
    if (type === 'edit') {
      title = 'Редактировать новость'
    } else if (type === 'add') {
      title = 'Добавить новость'
    };
    return (
      <div className={isOpened ? `${styles.container} ${styles.container_opened}` : styles.container}>
        <div className={styles.popup}>
          <button className={styles.close_button} onClick={onCloseButtonClick} />
          <h3 className={styles.title}>{title}</h3>
          <form encType="multipart/form-data" method="post" className={styles.form} name="edit">
            <div className={styles.image_title_block}>
              <label className={styles.label_input_file}>
                <span className={styles.span}>Загрузить изображение</span>
                <input className={styles.input_file} name="label" type="file" accept="image/*,image/jpeg" />
              </label>
              <div className={styles.title_block}>
                <label className={styles.label}>Заголовок</label>
                <textarea className={styles.input_title} name="label" type="text" />
              </div>
            </div>
            <label className={styles.label}>Текст</label>
            <textarea className={styles.textarea} name="label" type="text" rows="4" />
            <input className={styles.submit} name="submit" type="submit" value="Применить" />
          </form>
        </div>
      </div>
    )
  }
}

export default EditPopup;
