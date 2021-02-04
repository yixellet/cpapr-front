import React from "react";

import styles from './Document.module.css';

class Document extends React.Component {
  render() {
    const type = this.props.content.link ? this.props.content.link.split('.')[this.props.content.link.split('.').length-1] : ''
    return (
      <li className={styles.item}>
         
          {
            type ?
            <a className={styles.link} target="_blank" rel="noreferrer noopener" href={this.props.content.link}>{this.props.content.name}<span className={styles.type}>{type.toUpperCase()}</span></a> :
            <p className={styles.text}>{this.props.content.name}</p>
          }
        
      </li>
    )
  }
}

export default Document;
