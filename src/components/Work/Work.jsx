import React from "react";
import { Route, useRouteMatch } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';
import SideMenuRouter from '../SideMenuRouter/SideMenuRouter';
import Databases from './Databases/Databases';
import Rfpd from './Rfpd/Rfpd';
import Glonass from './Glonass/Glonass';
import Survey from './Survey/Survey';
import Cadaster from './Cadaster/Cadaster';
import Education from './Education/Education';
import PageNotFound from '../PageNotFound/PageNotFound';

import mainBlockStyles from '../CommonMainBlock/CommonMainBlock.module.css';
import workStyles from './Work.module.css';

function Work(props) {
  const { path } = useRouteMatch();
  return (
    <main className={mainBlockStyles.background}>
      <section className={mainBlockStyles.content}>
      <PageTitle name="Деятельность"/>
      <div className={workStyles.body}>
        <SideMenuRouter list={props.blockList} />
        <Route exact path={`${path}/databases`}>
          <Databases />
        </Route>
        <Route exact path={`${path}/rfpd`}>
          <Rfpd />
        </Route>
        <Route exact path={`${path}/glonass`}>
          <Glonass />
        </Route>
        <Route exact path={`${path}/survey`}>
          <Survey />
        </Route>
        <Route exact path={`${path}/cadaster`}>
          <Cadaster />
        </Route>
        <Route exact path={`${path}/education`}>
          <Education />
        </Route>
        <Route exact path="/404">
          <PageNotFound />
        </Route>
      </div>
      </section>
    </main>
  )
}

export default Work;
