import React from "react";
import NewsItem from '../NewsItem/NewsItem';

import classes from './NewsList.module.css';

class NewsList extends React.Component {
  render() {
    return (
      <ul className={classes.newslist}>
        {this.props.newsArray.map((item) => {
          return <NewsItem isAdmin={this.props.isAdmin} 
            id={item.id}
            image={item.image} 
            title={item.title} 
            content={item.text} 
            date={item.date_publisher} 
            path={`news/${item.id}`} 
            key={item.id}
            onOpenEditPopupButtonClick={() => this.props.onOpenEditPopupButtonClick(item.id, item.title, item.text, item.image)}
            onDeleteButtonClick={() => this.props.onDeleteButtonClick(item.id, item.title)} />
        })}
      </ul>
    )
  }
}

export default NewsList;
