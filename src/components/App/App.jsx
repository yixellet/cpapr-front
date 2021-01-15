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

import { extractFullDate } from '../../utils/dateConverter';
import menu from '../../content/menu';
import mainPageContent from '../../content/mainPage';
import news from '../../content/news';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      news: [],
    }
  }

  componentDidMount() {
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
            <News dateConverter={extractFullDate} />
          </Route>
          <Route path="/news/:id">
            <New dateConverter={extractFullDate} content={news.results} />
          </Route>
          <Route exact path="/docs">
            <Documents />
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
