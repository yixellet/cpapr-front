import React from "react";

import PageTitle from '../PageTitle/PageTitle';
import SideMenuItem from '../SideMenu/SideMenuItem/SideMenuItem';
import DocumentsList from './DocumentsList/DocumentsList';

import mainBlockStyles from '../CommonMainBlock/CommonMainBlock.module.css';
import sideMenuStyles from '../SideMenu/SideMenu.module.css';
import documentsStyles from './Documents.module.css';

class  Documents extends React.Component {
  constructor(props) {
    super(props)

    this.handleSideMenuOpenOrClose = this.handleSideMenuOpenOrClose.bind(this);
    this.getUniqueValues = this.getUniqueValues.bind(this);
    this.renderContent = this.renderContent.bind(this)

    this.state = {
      isFetching: true,
      isMenuOpen: false,
      documents: [],
      documentTypes: [],
      activeDocumentType: 1,
    }
  }

  componentDidMount() {
    this.setState({isFetching: true})
    this.props.api.getDocs()
      .then((data) => {
        this.setState({
          documents: data,
          documentTypes: this.getUniqueValues(data),
          isFetching: false,
        })
      })
  }

  getUniqueValues(arr) {
    let result = [];
    for (let obj of arr) {
      result.push({id: obj.id, name: obj.name})
    }
    return result;

  }

  handleChangeDocType(docType) {
    this.setState({
      activeDocumentType: docType,
      isMenuOpen: false
    })
  }

  handleSideMenuOpenOrClose() {
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
  }

  renderContent() {
    const { documentTypes, activeDocumentType, documents } = this.state;
    return (
      <>
      <div className={this.state.isMenuOpen ? `${sideMenuStyles.side_menu} ${sideMenuStyles.side_menu_open}` : `${sideMenuStyles.side_menu} ${sideMenuStyles.side_menu_closed}`}>
        <button onClick={this.handleSideMenuOpenOrClose} className={sideMenuStyles.button}/>
        <ul className={sideMenuStyles.list}>
          {
            documentTypes.map((item) => {
              return (<SideMenuItem onItemClick={this.handleChangeDocType.bind(this, item.id)} key={item.id} content={item} isActive={item.id === activeDocumentType} />)
            })
          }
        </ul>
      </div>
      <DocumentsList key={activeDocumentType} list={documents} activeDocumentType={activeDocumentType} />
      </>
    )
  }

  render() {
    return (
      <main className={mainBlockStyles.background}>
        <section className={mainBlockStyles.content}>
          <PageTitle name="Документы" />
          <div className={documentsStyles.body}>
            {
              this.state.isFetching ?
              <p>Загрузка документов</p> :
              this.renderContent()
             }
            
          </div>
        </section>
      </main>
    )
  }
}

export default Documents;
