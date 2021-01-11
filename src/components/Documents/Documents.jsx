import React from "react";

import PageTitle from '../PageTitle/PageTitle';
import SideMenu from '../SideMenu/SideMenu';

import styles from './Documents.module.css';

class Documents extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      docType: 'org'
    }
  }

  componentWillMount() {
    console.log('mounted')
  }

  render() {
    return (
      <main className={styles.background}>
        <section className={styles.content}>
          <PageTitle name="Документы"/>
          <SideMenu />
          <ul className={styles.list}>

          </ul>
        </section>
      </main>
    )
  }
}

export default Documents;
