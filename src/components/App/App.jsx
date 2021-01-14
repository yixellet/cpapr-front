import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import News from '../News/News';
import New from '../News/New/New';
import Documents from '../Documents/Documents';
import Work from '../Work/Work';
import Contacts from '../Contacts/Contacts';
import About from '../About/About';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';

import { extractFullDate } from '../../utils/dateConverter';
import menu from '../../content/menu';
import mainPageContent from '../../content/mainPage';
import news from '../../content/news';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      documents: [],
      news: [],
    }
  }

  componentDidMount() {
    fetch("http://172.17.13.51:8000/api/v1/documents/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ documents: data.results })
      })
    fetch("http://172.17.13.51:8000/api/v1/news/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ news: data.results })
      })
  }

  render() {
    return (
      <>
        <Header structure={menu.menu}/>
        <Switch>
          <Route exact path="/">
            <Main dateConverter={extractFullDate} mainPageContent={mainPageContent} news={this.state.news}/>
          </Route>
          <Route exact path="/news">
            <News news={this.state.news} />
          </Route>
          <Route path="/news/:id">
            <New content={news.results} />
          </Route>
          <Route path="/docs">
            <Documents docList={this.state.documents} />
          </Route>
          <Route path="/work">
            <Work blockList={menu.menu[3].sub}/>
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/about">
            <About blockList={menu.menu[5].sub}/>
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </>
    )
  };
}

export default App;
