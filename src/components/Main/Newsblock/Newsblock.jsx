import React from "react";
import { Link } from "react-router-dom";
import NewsItem from './NewsItem/NewsItem';

import styles from './Newsblock.module.css';

class Newsblock extends React.Component {

  render() {
    return (
      <section className={styles.section}>
        <Link to='/news' className={styles.title}>Новости</Link>
        <ul className={styles.newslist}>
          {this.props.newsArray.map((item) => {
            return <NewsItem title={item.title} date={item.date_publisher} path={`news/${item.id}`} key={item.id}/>
          })}
        </ul>
      </section>
    )
  }
}

export default Newsblock;
