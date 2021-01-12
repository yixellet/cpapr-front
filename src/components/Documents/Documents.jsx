import React from "react";

import PageTitle from '../PageTitle/PageTitle';
import SideMenu from '../SideMenu/SideMenu';
import DocumentsList from './DocumentsList/DocumentsList';

import mainBlockStyles from '../CommonMainBlock/CommonMainBlock.module.css';
import documentsStyles from './Documents.module.css';

class Documents extends React.Component {
  constructor(props) {
    super(props);

    this.documentTypes = this.getUniqueValues(this.props.docList);

    this.state = {
      activeDocumentType: this.documentTypes[0],
    }

    this.handleChangeDocType = this.handleChangeDocType.bind(this);
  }

  handleChangeDocType(activeDocType) {
    this.setState({docType: activeDocType})
    console.log(this.state);
  }

  getUniqueValues(arr) {
    let result = [];
    for (let obj of arr) {
      if (!result.includes(obj.typeName)) {
        result.push(obj.typeName)
      }
    }
    return result;
  }

  render() {
    return (
      <main className={mainBlockStyles.background}>
        <section className={mainBlockStyles.content}>
          <PageTitle name="Документы" />
          <div className={documentsStyles.body}>
            <SideMenu handleClick={this.handleChangeDocType} list={this.documentTypes} activeDocumentType={this.state.activeDocumentType} />
            <DocumentsList list={this.props.docList} />
          </div>
        </section>
      </main>
    )
  }
}

export default Documents;
