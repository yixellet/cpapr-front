import React from "react";

import styles from './PageNotFound.module.css';

class PageNotFound extends React.Component {
  render() {
    return (
      <main className={styles.background}>
        <section className={styles.content}>
          <h1 className={styles.title}><span className={styles.title_span}>404</span> - страница не найдена</h1>
          <h2 className={styles.subtitle}>Ой, здесь ничего нет :(</h2>
        </section>
      </main>
    )
  }
}

export default PageNotFound;
