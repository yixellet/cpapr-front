import React from "react";
import { Link } from "react-router-dom";
import NewsItem from './NewsItem/NewsItem';

import styles from './Newsblock.module.css';

class Newsblock extends React.Component {

  render() {
    return (
      <section className={styles.news}>
        <Link to='/news'>Новости</Link>
        <ul>
          {this.props.newsArray.map((item) => {
            return <NewsItem title={item.title} date={item.date_publisher}/>
          })}
        </ul>
      </section>
    )
  }
}

export default Newsblock;
