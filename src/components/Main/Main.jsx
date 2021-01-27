import React from "react";
import Lead from './Lead/Lead';
import Shortcuts from './Shortcuts/Shortcuts';
import Newsblock from './Newsblock/Newsblock';

import styles from './Main.module.css';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFetching: false,
      error: null,
      news: [],
    }
  }

  componentDidMount() {
    this.setState({ isFetching: true })
    this.props.api.getNews(10, 1)
      .then((data) => {
        this.setState({
          news: data.results,
          isFetching: false
        })
      },
      (error) => {
        this.setState({
          isFetching: false,
          error
        })
      })
  }

  render() {
    const { isFetching, error, news } = this.state;
    let fetchNews;
    if (isFetching) {
      fetchNews = <h3 className={styles.placeholder}>Загрузка новостей...</h3>
    } else if (error) {
      fetchNews = <h3 className={styles.placeholder}>Ошибка загрузки</h3>
    } else {
      fetchNews = <Newsblock dateConverter={this.props.dateConverter} newsArray={news.slice(0,4)}/>
    }
    return (
      <main className={styles.background}>
        <div className={styles.content}>
          <Lead content={this.props.mainPageContent.lead}/>
          <div className={styles.links__block}>
            <Shortcuts content={this.props.mainPageContent.shortcuts} />
            {fetchNews}
          </div>
        </div>
      </main>
    )
  }
}

export default Main;
