import React from "react";

import styles from './EditPopup.module.css';

class EditPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.data.title,
      text: this.props.data.text,
      image: this.props.data.image,
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
    const formData = new FormData(this.allForm.current);
    this.props.api.editNewItem(formData)
      .then((data) => {
        this.props.onSubmitClick(data)
      })
      .catch((error) => {
        alert(error)
      })
  }

  style = {
    backgroundImage: `url(${this.props.data.image})`
  };

  render() {
    console.log(this.props)
    const { isOpened, onCloseButtonClick } = this.props;
    return (
      <div className={isOpened ? `${styles.container} ${styles.container_opened}` : styles.container}>
        <div className={styles.popup}>
          <button className={styles.close_button} onClick={onCloseButtonClick} />
          <h3 className={styles.title}>Редактировать новость</h3>
          <form method="post" className={styles.form} name="editform" onSubmit={this.handleSubmit} ref={this.allForm}>
            <div className={styles.image_title_block}>
              {
                this.state.image ?
                <label className={styles.label_input_file} style={this.style}>
                  <input className={styles.input_file} name="image" type="file" ref={this.fileInput} accept="image/*,image/jpeg" onChange={this.handleInputChange} />
                </label> :
                <label className={styles.label_input_file}>
                  <span className={styles.span}>Загрузить изображение</span>
                  <input className={styles.input_file} name="image" type="file" ref={this.fileInput} accept="image/*,image/jpeg" onChange={this.handleInputChange} />
                </label>
              }
              <div className={styles.title_block}>
                <label className={styles.label}>Заголовок</label>
                <textarea value={this.state.title} minLength='10' className={styles.input_title} name="title" type="text" onChange={this.handleInputChange} />
              </div>
            </div>
            <label className={styles.label}>Текст</label>
            <textarea value={this.state.text} minLength='10' className={styles.textarea} name="text" type="text" rows="4" onChange={this.handleInputChange} />
            <input className={styles.submit} name="submit" type="submit" value="Применить" />
          </form>
        </div>
      </div>
    )
  }
}

export default EditPopup;
