import React from "react";
import PageTitle from '../PageTitle/PageTitle';
import NewsList from './NewsList/NewsList';

import mainBlockStyles from '../CommonMainBlock/CommonMainBlock.module.css';

class News extends React.Component {
  render() {
    return (
      <main className={mainBlockStyles.background}>
        <section className={mainBlockStyles.content}>
        <PageTitle name="Новости"/>
        <NewsList newsArray={this.props.news} />
        </section>
      </main>
    )
  }
}

export default News;
