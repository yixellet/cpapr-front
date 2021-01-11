import React from "react";

import PageTitle from '../PageTitle/PageTitle';
import SideMenu from '../SideMenu/SideMenu';

import docs from '../../content/documents';

import styles from './Documents.module.css';

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
      <main className={styles.background}>
        <section className={styles.content}>
          <PageTitle name="Документы"/>
          <SideMenu list={this.getUniqueValues(docs)}/>
          <ul className={styles.list}>
            {
              this.chooseDocType().map((item) => {
                return (<li>{item}</li>)
              })
            }
          </ul>
        </section>
      </main>
    )
  }
}

export default Documents;
