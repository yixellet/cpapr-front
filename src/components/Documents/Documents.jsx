import React from "react";
import { Link } from "react-router-dom";

import PageTitle from '../PageTitle/PageTitle';
import SideMenu from '../SideMenu/SideMenu';

import docs from '../../content/documents';

import meinBlockStyles from '../CommonMainBlock/CommonMainBlock.module.css';
import documentsStyles from './Documents.module.css';

class Documents extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      docType: 'org'
    }

    this.chooseDocType = this.chooseDocType.bind(this);
  }

  getUniqueValues(arr) {
    let result = [];

    for (let obj of arr) {
      if (!result.includes(obj.type_file)) {
        result.push(obj.type_file)
      }
    }

    return result;
  }

  chooseDocType() {
    return docs.filter((doc) => {
      return (doc.type_file === 'Учредительные документы')
    })
  }

  render() {
    return (
      <main className={meinBlockStyles.background}>
        <section className={meinBlockStyles.content}>
          <PageTitle name="Документы"/>
          <div className={documentsStyles.body}>
            <SideMenu list={this.getUniqueValues(docs)}/>
            <ul className={documentsStyles.list}>
              {
                this.chooseDocType().map((doc) => {
                  return (<li><Link target="blank" to={doc.doc_file}>{doc.name}</Link></li>)
                })
              }
            </ul>
          </div>
        </section>
      </main>
    )
  }
}

export default Documents;
