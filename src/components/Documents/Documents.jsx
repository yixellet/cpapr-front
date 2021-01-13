import React from "react";

import PageTitle from '../PageTitle/PageTitle';
import SideMenu from '../SideMenu/SideMenu';
import DocumentsList from './DocumentsList/DocumentsList';

import mainBlockStyles from '../CommonMainBlock/CommonMainBlock.module.css';
import documentsStyles from './Documents.module.css';

class  Documents extends React.Component {
  constructor(props) {
    super(props)

    this.handleChangeDocType = this.handleChangeDocType.bind(this);
    this.getUniqueValues = this.getUniqueValues.bind(this);
    this.documentTypes = this.getUniqueValues(this.props.docList);

    this.state = {
      activeDocumentType: this.documentTypes[0]
    }
  }

  getUniqueValues(arr) {
    let result = [];
    let objResult = [];
    for (let obj of arr) {
      if (!result.includes(obj.typeName)) {
        result.push(obj.typeName);
        objResult.push({name: obj.typeName, link: obj.type})
      }
    }
    return objResult;
  }

  chooseDocumentType(type) {
    const res = this.props.docList.filter((doc) => {
      return (doc.type === type)
    })
    return res
  }

  handleChangeDocType(docType) {
    this.setState({ activeDocumentType: docType })
    console.log(docType)
  }

  render() {
    return (
      <main className={mainBlockStyles.background}>
        <section className={mainBlockStyles.content}>
          <PageTitle name="Документы" />
          <div className={documentsStyles.body}>
            <SideMenu list={this.documentTypes} activeDocumentType={this.state.activeDocumentType.link} onMenuItemClick={this.handleChangeDocType} />
            <DocumentsList list={this.chooseDocumentType(this.state.activeDocumentType.link)} />
          </div>
        </section>
      </main>
    )
  }
}

export default Documents;
