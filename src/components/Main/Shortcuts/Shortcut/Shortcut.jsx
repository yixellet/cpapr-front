import React from "react";
import { Link } from "react-router-dom";

import styles from './Shortcut.module.css';

class Shortcut extends React.Component {
  
  render() {
    return (
      <li className={styles.shortcut}>
          <Link to={this.props.link} className={styles.shortcut__link}><p className={styles.shortcut__text}>{this.props.name}</p></Link>
      </li>
    )
  }
}

export default Shortcut;
