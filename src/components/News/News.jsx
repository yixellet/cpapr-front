import React from "react";
import PageTitle from '../PageTitle/PageTitle';
import NewsList from './NewsList/NewsList';
import Paginator from './Paginator/Paginator';
import EditPopup from './EditPopup/EditPopup';

import mainBlockStyles from '../CommonMainBlock/CommonMainBlock.module.css';

class News extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      news: {},
      isFetching: true,
      currentPage: 1,
    }

    this.setCurrentPage = this.setCurrentPage.bind(this);
  }

  componentDidMount() {
    const { currentPage } = this.state;
    this.setState({isFetching: true})
    fetch(`${this.props.url}?count=${this.props.pagesize}&page=${currentPage}`)
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

  setCurrentPage(pageq) {
    this.setState(() => ({currentPage: pageq}))
    this.setState({isFetching: true})
    fetch(`${this.props.url}?count=${this.props.pagesize}&page=${pageq}`)
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

  render() {
    const { news, isFetching, currentPage } = this.state;
    return (
      <main className={mainBlockStyles.background}>
        <section className={mainBlockStyles.content}>
          <PageTitle name="Новости"/>
          {
            isFetching 
            ? <p>FETCHING</p> 
            : <>
              <NewsList newsArray={news} isAdmin={this.props.isAdmin} />
              <Paginator onPageChange={this.setCurrentPage} data={news} currentPage={currentPage} pagesize={this.props.pagesize} />
            </>
          }
          <EditPopup />
        </section>
      </main>
    )
  }
}

export default News;
