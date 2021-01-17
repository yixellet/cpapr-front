import React from "react";
import NewsItem from '../NewsItem/NewsItem';

import classes from './NewsList.module.css';

class NewsList extends React.Component {
  render() {
    return (
      <ul className={classes.newslist}>
        {this.props.newsArray.results.map((item) => {
          return <NewsItem isAdmin={this.props.isAdmin} image={item.image} title={item.title} content={item.content} date={item.date} path={`news/${item.id}`} key={item._id}/>
        })}
      </ul>
    )
  }
}

export default NewsList;
