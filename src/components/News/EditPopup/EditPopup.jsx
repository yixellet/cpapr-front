import React from "react";

import placeHolder from '../../../images/placeholder.png';
import styles from './EditPopup.module.css';

class EditPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.title,
      text: this.props.text,
      image: this.props.image,
      error: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileAdd = React.createRef();
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
    const formData = new FormData(this.allForm.current);
    this.props.api.editNewItem(this.state.id, formData)
      .then((data) => {
        this.props.onSubmitClick(data)
      })
      .catch((error) => {
        this.setState({error: error})
      })
  }

  render() {
    const { onCloseButtonClick } = this.props;
    return (
      <div className={`${styles.container} ${styles.container_opened}`}>
        <div className={styles.popup}>
          <button className={styles.close_button} onClick={onCloseButtonClick} />
          <h3 className={styles.title}>Редактировать новость</h3>
          <form method="post" className={styles.form} name="editform" onSubmit={this.handleSubmit} ref={this.allForm}>
            <div className={styles.image_title_block}>
              <div className={styles.image_block}>
                <img className={styles.label_input_file} alt="illustration" src={this.state.image ? this.state.image : placeHolder}/>
                <div className={styles.button_block}>
                {
                  this.state.image ?
                  <>
                    <button className={`${styles.change_image_button} ${styles.image_button}`} />
                    <button className={`${styles.delete_image_button} ${styles.image_button}`} />
                  </> :
                  <input className={`${styles.add_image_button} ${styles.image_button}`} name="image" type="file" ref={this.fileAdd} accept="image/*,image/jpeg" onChange={this.handleInputChange} />
                }
                </div>
              </div>
              <div className={styles.title_block}>
                <label className={styles.label}>Заголовок</label>
                <textarea value={this.state.title} minLength='10' className={styles.input_title} name="title" type="text" onChange={this.handleInputChange} />
              </div>
            </div>
            <label className={styles.label}>Текст</label>
            <textarea value={this.state.text} minLength='10' className={styles.textarea} name="text" type="text" rows="4" onChange={this.handleInputChange} />
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
