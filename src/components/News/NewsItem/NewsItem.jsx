import React from "react";
import { Link } from "react-router-dom";
import { extractFullDate } from '../../../utils/dateConverter';

import classes from './NewsItem.module.css';
import placeHolder from '../../../images/placeholder.png';

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
        <div className={classes.image_block}>
          <img className={classes.image} alt={this.props.title} src={this.props.image ? this.props.image : placeHolder}/>
          {
            this.props.isAdmin ?
            <div className={classes.button_block}>
              {
                this.props.image ?
                <>
                  <button onClick={this.props.onAddImageButtonClick} className={`${classes.image_button} ${classes.change_image_button}`} />
                  <button onClick={this.props.onDeleteImageButtonClick} className={`${classes.image_button} ${classes.delete_image_button}`} />
                </> :
                <button onClick={this.props.onAddImageButtonClick} className={`${classes.image_button} ${classes.add_image_button}`} />
              }
            </div> :
            null
          }
        </div>
        <div className={classes.text}>
          <div className={classes.title_block}>
            <Link onClick={this.props.onLinkClick} to={this.props.path} className={classes.title}>{this.props.title}</Link>
            <div className={classes.links_block}>
              {this.props.isAdmin ? 
              <>
                <button onClick={this.props.onOpenEditPopupButtonClick} 
                  className={`${classes.button} ${classes.button_edit}`}></button>
                <button onClick={this.props.onDeleteButtonClick} className={`${classes.button} ${classes.button_delete}`}></button>
              </> : 
              null }
            </div>
          </div>
          <p className={classes.date}>{extractFullDate(this.props.date)}</p>
          <p className={classes.content}>{this.cutText(this.props.content, 300)}</p>
        </div>
      </li>
    )
  }
}

export default NewsItem;
