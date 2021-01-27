import React from "react";

import Document from './Document/Document';

import styles from './DocumentsList.module.css';

class DocumentsList extends React.Component {
  render() {
    return (
      <ul className={styles.list}>
        {
          this.props.list.map((doc, index) => {
            return (<Document content={doc} key={index}/>)
          })
        }
      </ul>
    )
  }
}

export default DocumentsList;
