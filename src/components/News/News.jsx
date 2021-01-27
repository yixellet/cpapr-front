import React from "react";
import PageTitle from '../PageTitle/PageTitle';
import NewsList from './NewsList/NewsList';
import Paginator from './Paginator/Paginator';
import AddPopup from './AddPopup/AddPopup';
import EditPopup from './EditPopup/EditPopup';
import ConfirmDeletePopup from '../ConfirmDeletePopup/ConfirmDeletePopup';
import ConfirmImageDeletePopup from '../ConfirmImageDeletePopup/ConfirmImageDeletePopup';
import AddImagePopup from '../AddImagePopup/AddImagePopup';

import mainBlockStyles from '../CommonMainBlock/CommonMainBlock.module.css';
import styles from './News.module.css';

class News extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isAddPopupOpened: false,
      isEditPopupOpened: false,
      isConfirmPopupOpened: false,
      isConfirmImagePopupOpened: false,
      isAddImagePopupOpened: false,
      confirmPopupType: null,
      news: {},
      results: [],
      isFetching: true,
      currentPage: sessionStorage.getItem('currentPage') && 1,
      newItemForDelete: null,
      titleItemForDelete: null,
      newItemForEdit: null,
      titleForEdit: null,
      textForEdit: null,
      imageForEdit: null,
      idForImageDelete: null,
      imageForDelete: null,
      newItemForAddingImage: null,
      scrollPosition: null,
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
    this.handleOpenConfirmImageDeletePopup = this.handleOpenConfirmImageDeletePopup.bind(this);
    this.handleCloseConfirmImageDeletePopup = this.handleCloseConfirmImageDeletePopup.bind(this);
    this.handleDeleteImage = this.handleDeleteImage.bind(this);
    this.handleOpenAddImagePopup = this.handleOpenAddImagePopup.bind(this);
    this.handleCloseAddImageDeletePopup = this.handleCloseAddImageDeletePopup.bind(this);
    this.handleAddImage = this.handleAddImage.bind(this);
    this.handleClickOnLink = this.handleClickOnLink.bind(this);
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

  handleOpenConfirmImageDeletePopup(id, image) {
    this.setState({
      isConfirmImagePopupOpened: true,
      idForImageDelete: id,
      imageForDelete: image,
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
      titleItemForDelete: null,
    })
  }

  handleCloseConfirmImageDeletePopup() {
    this.setState({
      isConfirmImagePopupOpened: false,
      idForImageDelete: null,
      imageForDelete: null,
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

  handleDeleteImage() {
    this.props.api.deleteImage(this.state.idForImageDelete)
      .then((res) => {
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
      })
    this.handleCloseConfirmImageDeletePopup()
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

  handleOpenAddImagePopup(id) {
    this.setState({
      isAddImagePopupOpened: true,
      newItemForAddingImage: id,
    })
  }

  handleCloseAddImageDeletePopup() {
    this.setState({
      isAddImagePopupOpened: false,
      newItemForAddingImage: null,
    })
  }

  handleAddImage() {
    this.handleCloseAddImageDeletePopup();
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

  handleClickOnLink() {
    sessionStorage.setItem('currentPage', this.state.currentPage);
    sessionStorage.setItem('scroll', window.scrollY);
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
      imageForEdit,
      imageForDelete,
      newItemForAddingImage } = this.state;
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
          onDeleteImageButtonClick={this.handleOpenConfirmImageDeletePopup} 
          onAddImageButtonClick={this.handleOpenAddImagePopup}
          newsArray={results} 
          isAdmin={this.props.isAdmin}
          onLinkClick={this.handleClickOnLink} />
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
          {
            this.state.isConfirmImagePopupOpened &&
            <ConfirmImageDeletePopup 
              onCreateNewItem={this.handleCreateNewItem} 
              image={imageForDelete} 
              type={confirmPopupType} 
              onDeleteButtonClick={this.handleDeleteImage} 
              onCloseButtonClick={this.handleCloseConfirmImageDeletePopup} />
          }
          {
            this.state.isAddImagePopupOpened &&
            <AddImagePopup 
              onSubmitClick={this.handleAddImage} 
              api={this.props.api} 
              onCloseButtonClick={this.handleCloseAddImageDeletePopup} 
              newItemForAddingImage={newItemForAddingImage} />
          }
        </section>
      </main>
    )
  }
}

export default News;
