import React from "react";
import PageTitle from '../PageTitle/PageTitle';
import NewsList from './NewsList/NewsList';
import Paginator from './Paginator/Paginator';
import EditPopup from './EditPopup/EditPopup';

import mainBlockStyles from '../CommonMainBlock/CommonMainBlock.module.css';
import styles from './News.module.css';

class News extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditPopupOpened: false,
      popupType: null,
      news: {},
      isFetching: true,
      currentPage: 1,
    }

    this.setCurrentPage = this.setCurrentPage.bind(this);
    this.handleCloseEditPopup = this.handleCloseEditPopup.bind(this);
    this.handleOpenEditPopup = this.handleOpenEditPopup.bind(this);
    this.handleOpenAddPopup = this.handleOpenAddPopup.bind(this);
  }

  componentDidMount() {
    const { currentPage } = this.state;
    this.setState({isFetching: true})
    this.props.api.getNews(10, currentPage)
      .then((data) => {
        this.setState({
          isFetching: false,
          news: data,
        });
      },
      (error) => {
        this.setState({
          isFetching: false,
          error
        })
      })
  }

  setCurrentPage(pageq) {
    this.setState(() => ({currentPage: pageq}))
    this.setState({isFetching: true})
    fetch(`${this.props.url}/news/?count=${this.props.pagesize}&page=${pageq}`)
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

  handleOpenAddPopup() {
    this.setState({
      isEditPopupOpened: true,
    });
    this.setState({
      popupType: 'add',
    });
  }

  handleOpenEditPopup() {
    this.setState({
      isEditPopupOpened: true,
    });
    this.setState({
      popupType: 'edit',
    });
  }

  handleCloseEditPopup() {
    this.setState({
      isEditPopupOpened: false,
    })
  }

  handleDelete

  render() {
    const { news, isFetching, error, currentPage, isEditPopupOpened, popupType } = this.state;
    let fetchNews;
    if (isFetching) {
      fetchNews = <p>Загрузка списка новостей...</p>
    } else if (error) {
      fetchNews = <p>При загрузке произошла ошибка</p>
    } else {
      fetchNews = <>
        <NewsList onOpenEditPopupButtonClick={this.handleOpenEditPopup} newsArray={news} isAdmin={this.props.isAdmin} />
        <Paginator onPageChange={this.setCurrentPage} data={news} currentPage={currentPage} pagesize={this.props.pagesize} />
      </>
    }
      return (
        <main className={mainBlockStyles.background}>
          <section className={mainBlockStyles.content}>
            <PageTitle name="Новости"/>
            {
              this.props.isAdmin ?
              <div className={styles.add_button_container}>
                <button onClick={this.handleOpenAddPopup} className={styles.add_button}>Добавить новость</button>
              </div> :
              null
            }
            {fetchNews}
            <EditPopup api={this.props.api} onCloseButtonClick={this.handleCloseEditPopup} isOpened={isEditPopupOpened} type={popupType} />
          </section>
        </main>
      )
    
  }
}

export default News;
