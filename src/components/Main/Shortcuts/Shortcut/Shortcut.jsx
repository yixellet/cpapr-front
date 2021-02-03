import React from "react";
import { Link } from "react-router-dom";
import styles from './Shortcut.module.css';

class Shortcut extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {'backgroundImage': this.props.image}
    };
  }
  
  render() {
    return (
      <li className={styles.shortcut}>
          <Link to={this.props.link} className={styles.shortcut__link}>
            <p className={styles.shortcut__text}>{this.props.name}</p>
            {/* <img className={styles.image} src={this.props.image} alt={this.props.name}/> */}
          </Link>
      </li>
    )
  }
}

export default Shortcut;
