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
    this.documentTypes = this.getUniqueValues(this.props.docList);

    this.state = {
      activeDocumentType: this.documentTypes[0],
      isMenuOpen: false,
      documents: [],
    }
  }

  getUniqueValues(arr) {
    let result = [];
    let objResult = [];
    for (let obj of arr) {
      if (!result.includes(obj.typeName)) {
        result.push(obj.typeName);
        objResult.push({name: obj.typeName, link: obj.type})
      }
    }
    return objResult;
  }

  chooseDocumentType(type) {
    const res = this.props.docList.filter((doc) => {
      return (doc.type === type)
    })
    return res
  }

  handleChangeDocType(docType) {
    this.setState({ activeDocumentType: docType, isMenuOpen: false })
  }

  handleSideMenuOpenOrClose() {
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
  }

  render() {
    console.log(this.state)
    return (
      <main className={mainBlockStyles.background}>
        <section className={mainBlockStyles.content}>
          <PageTitle name="Документы" />
          <div className={documentsStyles.body}>
            <div className={this.state.isMenuOpen ? `${sideMenuStyles.side_menu} ${sideMenuStyles.side_menu_open}` : `${sideMenuStyles.side_menu} ${sideMenuStyles.side_menu_closed}`}>
              <button onClick={this.handleSideMenuOpenOrClose} className={sideMenuStyles.button}/>
              <ul className={sideMenuStyles.list}>
                {
                  this.documentTypes.map((item) => {
                    return (<SideMenuItem onItemClick={this.handleChangeDocType.bind(this, item)} key={item.link} content={item} isActive={item === this.state.activeDocumentType} />)
                  })
                }
              </ul>
            </div>
            <DocumentsList list={this.chooseDocumentType(this.state.activeDocumentType.link)} />
          </div>
        </section>
      </main>
    )
  }
}

export default Documents;
