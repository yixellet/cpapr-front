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

    this.state = {
      isFetching: false,
      isMenuOpen: false,
      documents: [],
      documentTypes: [],
      activeDocumentType: null,
    }
  }

  componentDidMount() {
    this.setState({isFetching: true})
    this.props.api.getDocs()
      .then((data) => {
        this.setState({
          isFetching: false,
          documents: data,
          documentTypes: this.getUniqueValues(data),
        })
        this.setState({
          activeDocumentType: this.state.documentTypes[0].type,
        })
      })
  }

  getUniqueValues(arr) {
    let result = [];
    let objResult = [];
    for (let obj of arr) {
      if (!result.includes(obj.docType)) {
        result.push(obj.docType);
        objResult.push({type: obj.docType, typeName: obj.docTypeName})

      }
    }
    return objResult;

  }

  chooseDocumentType(type) {
    const res = this.state.documents.filter((doc) => {
      return (doc.docType === type)
    })
    return res
  }

  handleChangeDocType(docType) {
    this.setState({ activeDocumentType: docType.type, isMenuOpen: false })
  }

  handleSideMenuOpenOrClose() {
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
  }

  render() {
    const { documentTypes, activeDocumentType } = this.state;
    return (
      <main className={mainBlockStyles.background}>
        <section className={mainBlockStyles.content}>
          <PageTitle name="Документы" />
          <div className={documentsStyles.body}>
            {
              this.state.isFetching ?
              <p>Загрузка документов</p> :
            
            <div className={this.state.isMenuOpen ? `${sideMenuStyles.side_menu} ${sideMenuStyles.side_menu_open}` : `${sideMenuStyles.side_menu} ${sideMenuStyles.side_menu_closed}`}>
              <button onClick={this.handleSideMenuOpenOrClose} className={sideMenuStyles.button}/>
              <ul className={sideMenuStyles.list}>
                {
                  documentTypes.map((item) => {
                    return (<SideMenuItem onItemClick={this.handleChangeDocType.bind(this, item)} key={item.type} content={item} isActive={item.type === activeDocumentType} />)
                  })
                }
              </ul>
            </div> }
            <DocumentsList list={this.chooseDocumentType(activeDocumentType)} />
          </div>
        </section>
      </main>
    )
  }
}

export default Documents;
