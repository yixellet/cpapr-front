import React from "react";
import NewsItem from '../NewsItem/NewsItem';

import classes from './NewsList.module.css';

class NewsList extends React.Component {
  render() {
    return (
      <ul className={classes.newslist}>
        {this.props.newsArray.map((item) => {
          return <NewsItem image={item.image} title={item.title} content={item.content} date={item.date_publisher} />
        })}
      </ul>
    )
  }
}

export default NewsList;
