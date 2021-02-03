import React from "react";

import styles from './Carousel.module.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    }
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
  }

  handleRightClick() {
    const { currentImageIndex } = this.state;
    if (currentImageIndex === this.props.images.length - 1) {
      this.setState({
        currentImageIndex: 0,
      })
    }
    this.setState((state) => {
      return {currentImageIndex: state.currentImageIndex + 1}
    })
  }

  handleLeftClick() {
    const { currentImageIndex } = this.state;
    if (currentImageIndex === 0) {
      this.setState({
        currentImageIndex: this.props.images.length - 1,
      })
    }
    this.setState((state) => {
      return {currentImageIndex: state.currentImageIndex - 1}
    })
  }

  render() {
    const { images } = this.props;
    const { currentImageIndex } = this.state;
    return (
      <div className={styles.container}>
        <img src={images[currentImageIndex]} alt='Иллюстрация' className={styles.image} />
        <button onClick={this.handleLeftClick} className={`${styles.arrow} ${styles.arrow_left}`} />
        <button onClick={this.handleRightClick} className={`${styles.arrow} ${styles.arrow_right}`} />
      </div>
    )
  }
}

export default Carousel;
