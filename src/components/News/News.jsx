import React from "react";
import PageTitle from '../PageTitle/PageTitle';
import NewsList from './NewsList/NewsList';
import Paginator from './Paginator/Paginator';
import AddPopup from './AddPopup/AddPopup';
import EditPopup from './EditPopup/EditPopup';
import ConfirmDeletePopup from '../ConfirmDeletePopup/ConfirmDeletePopup';

import mainBlockStyles from '../CommonMainBlock/CommonMainBlock.module.css';
import styles from './News.module.css';

class News extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isAddPopupOpened: false,
      isEditPopupOpened: false,
      isConfirmPopupOpened: false,
      confirmPopupType: null,
      news: {},
      results: [],
      isFetching: true,
      currentPage: 1,
      newItemForDelete: null,
      titleItemForDelete: null,
      newItemForEdit: null,
      titleForEdit: null,
      textForEdit: null,
      imageForEdit: null,
    }

    this.setCurrentPage = this.setCurrentPage.bind(this);
    this.handleCloseEditPopup = this.handleCloseEditPopup.bind(this);
    this.handleCloseAddPopup = this.handleCloseAddPopup.bind(this);
    this.handleOpenEditPopup = this.handleOpenEditPopup.bind(this);
    this.handleOpenAddPopup = this.handleOpenAddPopup.bind(this);
    this.handleOpenConfirmDeletePopup = this.handleOpenConfirmDeletePopup.bind(this);
    this.handleCloseConfirmDeletePopup = this.handleCloseConfirmDeletePopup.bind(this);
    this.handleDeleteNewItem = this.handleDeleteNewItem.bind(this);
    this.handleOpenOkPopup = this.handleOpenOkPopup.bind(this);
    this.handleCreateNewItem = this.handleCreateNewItem.bind(this);
    this.handleEditNewItem = this.handleEditNewItem.bind(this);
  }

  componentDidMount() {
    const { currentPage } = this.state;
    this.setState({isFetching: true})
    this.props.api.getNews(10, currentPage)
      .then((data) => {
        this.setState({
          isFetching: false,
          news: data,
          results: data.results,
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
    this.props.api.getNews(10, pageq)
      .then((data) => {
        this.setState({
          isFetching: false,
          news: data,
          results: data.results,
        });
      })
  }

  handleOpenAddPopup() {
    this.setState({
      isAddPopupOpened: true,
    });
  }

  handleOpenEditPopup(id, title, text, image) {
    this.setState({
      newItemForEdit: id,
      titleForEdit: title,
      textForEdit: text,
      imageForEdit: image,
      isEditPopupOpened: true,
    });
  }

  handleCloseAddPopup() {
    this.setState({
      isAddPopupOpened: false,
    })
  }

  handleCloseEditPopup() {
    this.setState({
      isEditPopupOpened: false,
    })
  }

  handleOpenConfirmDeletePopup(id, title) {
    this.setState({
      isConfirmPopupOpened: true,
      newItemForDelete: id,
      titleItemForDelete: title,
      confirmPopupType: 'confirm',
    })
  }

  handleOpenOkPopup() {
    this.setState({
      isConfirmPopupOpened: true,
      confirmPopupType: 'ok',
    })
  }

  handleCloseConfirmDeletePopup() {
    this.setState({
      isConfirmPopupOpened: false,
      newItemForDelete: null,
    })
  }

  handleDeleteNewItem() {
    this.props.api.deleteNewItem(this.state.newItemForDelete)
      .then((res) => {
        if (res.status === 204) {
          this.handleOpenOkPopup();
          const newArray = this.state.results;
          const index = newArray.findIndex((element) => {
            return element.id === this.state.newItemForDelete;
          })
          newArray.splice(index, 1)
          this.setState({
            results: newArray,
          })
        }
      })
  }

  handleCreateNewItem(data) {
    const newArray = this.state.results;
    newArray.unshift(data);
    this.setState({
      results: newArray,
    });
    this.handleCloseAddPopup();
  }

  handleEditNewItem() {
    const { currentPage } = this.state;
    this.setState({isFetching: true})
    this.props.api.getNews(10, currentPage)
      .then((data) => {
        this.setState({
          isFetching: false,
          news: data,
          results: data.results,
        });
      },
      (error) => {
        this.setState({
          isFetching: false,
          error
        })
      })
    this.handleCloseEditPopup();
  }

  render() {
    const { 
      news, 
      results, 
      isFetching, 
      error, 
      currentPage, 
      confirmPopupType, 
      titleItemForDelete,
      newItemForEdit,
      titleForEdit,
      textForEdit,
      imageForEdit } = this.state;
    let fetchNews;
    if (isFetching) {
      fetchNews = <p>Загрузка списка новостей...</p>
    } else if (error) {
      fetchNews = <p>При загрузке произошла ошибка</p>
    } else {
      fetchNews = <>
        <NewsList 
          onDeleteButtonClick={this.handleOpenConfirmDeletePopup} 
          onOpenEditPopupButtonClick={this.handleOpenEditPopup} 
          newsArray={results} 
          isAdmin={this.props.isAdmin} />
        <Paginator 
          onPageChange={this.setCurrentPage} 
          data={news} 
          currentPage={currentPage} 
          pagesize={this.props.pagesize} />
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
          {
            this.state.isAddPopupOpened &&
            <AddPopup 
              onSubmitClick={this.handleCreateNewItem} 
              api={this.props.api} 
              onCloseButtonClick={this.handleCloseAddPopup} />
          }
          {
            this.state.isEditPopupOpened && 
            <EditPopup 
              onSubmitClick={this.handleEditNewItem} 
              api={this.props.api} 
              onCloseButtonClick={this.handleCloseEditPopup} 
              id={newItemForEdit}
              title={titleForEdit}
              text={textForEdit}
              image={imageForEdit}
              key={newItemForEdit} />
          }
          {
            this.state.isConfirmPopupOpened &&
            <ConfirmDeletePopup 
              onCreateNewItem={this.handleCreateNewItem} 
              title={titleItemForDelete} 
              type={confirmPopupType} 
              onDeleteButtonClick={this.handleDeleteNewItem} 
              onCloseButtonClick={this.handleCloseConfirmDeletePopup} />
          }
        </section>
      </main>
    )
  }
}

export default News;
