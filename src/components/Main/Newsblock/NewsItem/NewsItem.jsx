import React from "react";
import { Link } from "react-router-dom";

import styles from './NewsItem.module.css';

class NewsItem extends React.Component {

  render() {
    return (
      <li className={styles.item}>
        <Link to={this.props.path} className={styles.link}>
          <p className={styles.title}>{this.props.title}</p>
          <p className={styles.date}>{this.props.date}</p>
        </Link>
      </li>
    )
  }
}

export default NewsItem;
