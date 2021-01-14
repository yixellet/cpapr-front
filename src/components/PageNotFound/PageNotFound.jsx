import React from "react";

import mainBlockStyles from '../CommonMainBlock/CommonMainBlock.module.css';
import styles from './PageNotFound.module.css';

class PageNotFound extends React.Component {
  render() {
    return (
      <main className={mainBlockStyles.background}>
        <section className={mainBlockStyles.content}>
          <h1 className={styles.title}><span className={styles.title_span}>404</span> - страница не найдена</h1>
          <h2 className={styles.subtitle}>Ой, здесь ничего нет :(</h2>
        </section>
      </main>
    )
  }
}

export default PageNotFound;
