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
import SignIn from '../SignIn/SignIn';

import { extractFullDate } from '../../utils/dateConverter';
import Api from '../../utils/Api';
import menu from '../../content/menu';
import mainPageContent from '../../content/mainPage';
import { ERROR_MESSAGES, BASE_URL_WORK, NEWS_PAGESIZE } from '../../content/config';

const api = new Api(BASE_URL_WORK, ERROR_MESSAGES);

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // isAdmin: true,
      isAdmin: localStorage.getItem('access'),
    }
    this.checkIsAdmin = this.checkIsAdmin.bind(this);
  }

  checkIsAdmin() {
    this.setState({ isAdmin: localStorage.getItem('access') })
  }

  render() {
    return (
      <>
        <Header structure={menu.menu} isAdmin={this.state.isAdmin} onSignOut={this.checkIsAdmin} />
        <Switch>
          <Route exact path="/">
            <Main api={api} dateConverter={extractFullDate} mainPageContent={mainPageContent} />
          </Route>
          <Route exact path="/news/">
            <News api={api} pagesize={NEWS_PAGESIZE} isAdmin={this.state.isAdmin} />
          </Route>
          <Route path="/news/:id/">
            <New dateConverter={extractFullDate} api={api} />
          </Route>
          <Route exact path="/docs">
            <Documents api={api} />
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
          <Route exact path="/administration">
            <SignIn api={api} onSignIn={this.checkIsAdmin} />
          </Route>
          <Route exact path="/404">
            <PageNotFound />
          </Route>
        </Switch>
        <Footer />
      </>
    )
  };
}

export default App;
