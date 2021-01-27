import React from "react";

import styles from './AddImagePopup.module.css';

class AddImagePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.api.addImage(this.props.newItemForAddingImage, formData)
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
          <h3 className={styles.title}>Загрузить изображение</h3>
          <form className={styles.form} onSubmit={this.handleSubmit} ref={this.allForm}>
            <input type="file" name="image" className={styles.input} onChange={this.handleInputChange} />
            <div className={styles.button_block}>
              <input type="submit" className={`${styles.delete_button} ${styles.button}`} value="Загрузить" />
              <button className={`${styles.cancel_button} ${styles.button}`} onClick={onCloseButtonClick}>Отмена</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddImagePopup;
