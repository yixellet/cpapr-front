import React from "react";
import { Link } from "react-router-dom";

import classes from './NewsItem.module.css';

class NewsItem extends React.Component {
  render() {
    return (
      <li className={classes.newsitem}>
      <img className={classes.newsitem__image} alt="illustration" src={this.props.image}/>
      <div className={classes.newsitem__text}>
        <h3 className={classes.newsitem__title}>{this.props.title}</h3>
        <p className={classes.newsitem__content}>{this.props.content}</p>
        <Link to="newsitem.html" className={classes.newsitem__readmore}>Читать далее</Link>
      </div>
    </li>
    )
  }
}

export default NewsItem;
