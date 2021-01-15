import React from "react";

import styles from './Document.module.css';

class Document extends React.Component {
  render() {
    return (
      <li className={styles.item}>
        <a className={styles.link}  target="_blank" rel="noreferrer noopener" href={this.props.content.link}>{this.props.content.name}</a>
      </li>
    )
  }
}

export default Document;
