import React from "react";

import Document from './Document/Document';

import styles from './DocumentsList.module.css';

class DocumentsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      docs: this.props.list,
      type: this.props.activeDocumentType,
    }
    this.chooseDocumentType = this.chooseDocumentType.bind(this)
  }

  chooseDocumentType(docs, type) {
    const r = docs.find((doc) => {
      return doc.id === type
    })
    return(r)
  }
  
  render() {
    const { docs, type } = this.state;
    const arr = this.chooseDocumentType(docs, type);
    return (
      <ul className={styles.list}>
        {this.props.list ?
          arr.doctype.map((doc) => {
            return (<Document content={doc} key={doc.id}/>)
          }) :
          null
        }
      </ul>
    )
  }
}

export default DocumentsList;
