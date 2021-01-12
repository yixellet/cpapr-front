import React from "react";
import { Link } from 'react-router-dom';

import styles from './Document.module.css';

class Document extends React.Component {
  render() {
    return (
      <li className={styles.item}>
        <Link className={styles.link} target="blank" to={this.props.content.doc_file}>{this.props.content.name}</Link>
      </li>
    )
  }
}

export default Document;
