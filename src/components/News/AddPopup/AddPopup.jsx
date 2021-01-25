import React from "react";

import styles from './AddPopup.module.css';

class EditPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      text: null,
      image: null,
      error: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
    this.allForm = React.createRef();
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const date = new Date().toISOString();
    const formData = new FormData(this.allForm.current);
    formData.append('date_publisher', date);
    this.props.api.createNewItem(formData)
      .then((data) => {
        this.props.onSubmitClick(data)
      })
      .catch((error) => {
        this.setState({error: error})
      })
      this.allForm.current.reset();
  }


  render() {
    const { onCloseButtonClick } = this.props;
    return (
      <div className={`${styles.container} ${styles.container_opened}`}>
        <div className={styles.popup}>
          <button className={styles.close_button} onClick={onCloseButtonClick} />
          <h3 className={styles.title}>Добавить новость</h3>
          <form method="post" className={styles.form} name="editform" onSubmit={this.handleSubmit} ref={this.allForm}>
            <div className={styles.image_title_block}>
              <label className={this.state.image ? `${styles.label_input_file} ${styles.label_input_file_selected}` : styles.label_input_file}>
                {
                  this.state.image ? 
                  <span className={styles.span_selected}>Загружено</span> : 
                  <span className={styles.span}>Загрузить изображение</span>
                }
                <input className={styles.input_file} name="image" type="file" ref={this.fileInput} accept="image/*,image/jpeg" onChange={this.handleInputChange} />
              </label>
              <div className={styles.title_block}>
                <label className={styles.label}>Заголовок</label>
                <textarea minLength='10' className={styles.input_title} name="title" type="text" onChange={this.handleInputChange} />
              </div>
            </div>
            <label className={styles.label}>Текст</label>
            <textarea minLength='10' className={styles.textarea} name="text" type="text" rows="4" onChange={this.handleInputChange} />
            <div className={styles.submit_error_block}>
              <input className={styles.submit} name="submit" type="submit" value="Применить" />
              {
                this.state.error ?
                <p className={styles.error}>При добавлении новости произошла ошибка. Скорее всего, дело в изображении. Попробуйте прикрепить другое фото.</p> :
                null
              }
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default EditPopup;
