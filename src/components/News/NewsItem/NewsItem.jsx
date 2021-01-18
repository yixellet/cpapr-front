import React from "react";
import { Link } from "react-router-dom";
import { extractFullDate } from '../../../utils/dateConverter';

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
        {this.props.image ? <img className={classes.image} alt="illustration" src={this.props.image}/> : <div className={classes.image_placeholder} /> }
        <div className={classes.text}>
          {/* <h3 className={classes.title}>{this.props.title}</h3> */}
          <Link to={this.props.path} className={classes.title}>{this.props.title}</Link>
          <p className={classes.date}>{extractFullDate(this.props.date)}</p>
          <p className={classes.content}>{this.cutText(this.props.content, 300)}</p>
          <div className={classes.links_block}>
            
            {this.props.isAdmin ? 
            <div>
              <button className={`${classes.button} ${classes.button_edit}`}></button>
              <button className={`${classes.button} ${classes.button_delete}`}></button>
            </div> : null }
          </div>
        </div>
      </li>
    )
  }
}

export default NewsItem;
