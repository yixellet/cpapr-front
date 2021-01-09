import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import News from '../News/News';
import Documents from '../Documents/Documents';
import OrgDocs from '../Documents/OrgDocs/OrgDocs';
import RegDocs from '../Documents/RegDocs/RegDocs';
import ForClients from '../Documents/ForClients/ForClients';
import Work from '../Work/Work';
import Databases from '../Work/Databases/Databases';
import Rfpd from '../Work/Rfpd/Rfpd';
import Glonass from '../Work/Glonass/Glonass';
import Survey from '../Work/Survey/Survey';
import Cadaster from '../Work/Cadaster/Cadaster';
import Education from '../Work/Education/Education';
import Contacts from '../Contacts/Contacts';
import About from '../About/About';
import History from '../About/History/History';
import Structure from '../About/Structure/Structure';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';
import menu from '../../content/menu';
import mainPageContent from '../../content/mainPage';
import news from '../../content/news';

class App extends React.Component {

  render() {
    return (
      <>
        <Header structure={menu.menu}/>
        <Switch>
          <Route exact path="/">
            <Main mainPageContent={mainPageContent} news={news.results}/>
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route exact path="/docs">
            <Documents />
          </Route>
          <Route path="/docs/organisational">
            <OrgDocs />
          </Route>
          <Route path="/docs/regulatory">
            <RegDocs />
          </Route>
          <Route path="/docs/for-clients">
            <ForClients />
          </Route>
          <Route exact path="/work">
            <Work />
          </Route>
          <Route path="/work/databases">
            <Databases />
          </Route>
          <Route path="/work/rfpd">
            <Rfpd />
          </Route>
          <Route path="/work/glonass">
            <Glonass />
          </Route>
          <Route path="/work/survey">
            <Survey />
          </Route>
          <Route path="/work/cadaster">
            <Cadaster />
          </Route>
          <Route path="/work/education">
            <Education />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/about/history">
            <History />
          </Route>
          <Route path="/about/structure">
            <Structure />
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
