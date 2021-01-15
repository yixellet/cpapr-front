import React from "react";
import NewsItem from '../NewsItem/NewsItem';

import classes from './NewsList.module.css';

class NewsList extends React.Component {
  constructor(props) {
    super(props)
    this.props = props;
  }
  render() {
    return (
      <ul className={classes.newslist}>
        {this.props.newsArray.map((item) => {
          return <NewsItem image={item.image} title={item.title} content={item.text} date={item.date_publisher} path={`news/${item.id}`} key={item.id}/>
        })}
      </ul>
    )
  }
}

export default NewsList;
