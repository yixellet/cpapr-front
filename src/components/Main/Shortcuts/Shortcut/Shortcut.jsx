import React from "react";
import { Link } from "react-router-dom";

import styles from './Shortcut.module.css';

class Shortcut extends React.Component {
  
  render() {
    return (
      <li className={styles.shortcut}>
          <Link to={this.props.link}><p>{this.props.name}</p></Link>
      </li>
    )
  }
}

export default Shortcut;
