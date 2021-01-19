import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

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
import SignIn from '../SignIn/SignIn';

import { extractFullDate } from '../../utils/dateConverter';
import menu from '../../content/menu';
import mainPageContent from '../../content/mainPage';
import { BASE_URL_HOME, BASE_URL_WORK, NEWS_PAGESIZE } from '../../content/config';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isAdmin: false,
      // isAdmin: localStorage.getItem('cpapr-token'),
      news: [],
    }
    this.checkIsAdmin = this.checkIsAdmin.bind(this);
  }

  checkIsAdmin() {
    this.setState({ isAdmin: localStorage.getItem('cpapr-token') })
  }

  componentDidMount() {
    // fetch(`${BASE_URL_HOME}/news?page=1&count=10`)
    fetch(`${BASE_URL_WORK}/news/?page=1`)
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
        <Header structure={menu.menu} isAdmin={this.state.isAdmin} onSignOut={this.checkIsAdmin} />
        <Switch>
          <Route exact path="/">
            <Main dateConverter={extractFullDate} mainPageContent={mainPageContent} news={this.state.news}/>
          </Route>
          <Route exact path="/news">
            <News url={BASE_URL_WORK} pagesize={NEWS_PAGESIZE} isAdmin={this.state.isAdmin} />
          </Route>
          <Route path="/news/:id">
            <New dateConverter={extractFullDate} url={BASE_URL_WORK} />
          </Route>
          <Route exact path="/docs">
            <Documents />
          </Route>
          <Route path="/work">
            <Work blockList={menu.menu[3].sub}/>
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
          <Route path="/about">
            <About blockList={menu.menu[5].sub}/>
          </Route>
          <Route exact path="/admin">
            <SignIn onSignIn={this.checkIsAdmin} />
          </Route>
          <Route exact path="/404">
            <PageNotFound />
          </Route>
          <Redirect to="/404" />
        </Switch>
        <Footer />
      </>
    )
  };
}

export default App;
