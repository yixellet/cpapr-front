import React from "react";
import { Link } from "react-router-dom";

import styles from './NewsItem.module.css';

class NewsItem extends React.Component {

  render() {
    return (
      <li>
        <Link to='/'>
          <p>{this.props.title}</p>
          <p>{this.props.date}</p>
        </Link>
      </li>
    )
  }
}

export default NewsItem;
