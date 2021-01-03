import React from "react";
import PageTitle from '../PageTitle/PageTitle';
import NewsList from './NewsList/NewsList';

import news from '../../content/news';

import classes from './News.module.css';

class News extends React.Component {
  render() {
    return (
      <main className={classes.background}>
        <section className={classes.content}>
        <PageTitle name="Новости"/>
        <NewsList newsArray={news.results} />
        </section>
      </main>
    )
  }
}

export default News;
