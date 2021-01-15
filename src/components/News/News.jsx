import React from "react";
import PageTitle from '../PageTitle/PageTitle';
import NewsList from './NewsList/NewsList';
import Paginator from './Paginator/Paginator';

import mainBlockStyles from '../CommonMainBlock/CommonMainBlock.module.css';

class News extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      news: {},
      isFetching: false,
      currentPage: 1,
    }

    this.handleChangePage = this.handleChangePage.bind(this);
  }

  componentWillMount() {
    const { currentPage } = this.state;
    this.setState({isFetching: true})
    fetch(`http://172.17.13.51:8000/api/v1/news/?page=${currentPage}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          isFetching: false,
          news: data,
        });
      })
  }

  handleChangePage(page) {
    this.setState({
      currentPage: page
    })
  }

  render() {
    const { news, isFetching, currentPage } = this.state;
    return (
      <main className={mainBlockStyles.background}>
        <section className={mainBlockStyles.content}>
          <PageTitle name="Новости"/>
          {
            isFetching ? <p>FETCHING</p> : <><NewsList newsArray={news.results} /><Paginator onPageChange={this.handleChangePage} data={news} currentPage={currentPage} /></>
          }
        </section>
      </main>
    )
  }
}

export default News;
