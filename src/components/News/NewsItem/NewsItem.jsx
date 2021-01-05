import React from "react";
import { Link } from "react-router-dom";

import classes from './NewsItem.module.css';

class NewsItem extends React.Component {

  cutText(text, maxSymbols) {
    const subString = text.substr(0, maxSymbols);
    for (let i = subString.length; i > 0; i--) {
      if (subString[i] === " ") {
        return text.substr(0,i) + '...';
      }
    }
  }

  render() {
    return (
      <li className={classes.newsitem}>
      <img className={classes.newsitem__image} alt="illustration" src={this.props.image}/>
      <div className={classes.newsitem__text}>
        <h3 className={classes.newsitem__title}>{this.props.title}</h3>
        <p className={classes.newsitem__content}>{this.cutText(this.props.content,300)}</p>
        <Link to="newsitem.html" className={classes.newsitem__readmore}>Читать далее</Link>
      </div>
    </li>
    )
  }
}

export default NewsItem;
