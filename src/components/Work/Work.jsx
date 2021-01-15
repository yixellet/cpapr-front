import React from "react";
import { Redirect, Route, useRouteMatch } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';
import SideMenuRouter from '../SideMenuRouter/SideMenuRouter';
import Databases from './Databases/Databases';
import Rfpd from './Rfpd/Rfpd';
import Glonass from './Glonass/Glonass';
import Survey from './Survey/Survey';
import Cadaster from './Cadaster/Cadaster';
import Education from './Education/Education';

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
        <Route path={`${path}/databases`}>
          <Databases />
        </Route>
        <Route path={`${path}/rfpd`}>
          <Rfpd />
        </Route>
        <Route path={`${path}/glonass`}>
          <Glonass />
        </Route>
        <Route path={`${path}/survey`}>
          <Survey />
        </Route>
        <Route path={`${path}/cadaster`}>
          <Cadaster />
        </Route>
        <Route path={`${path}/education`}>
          <Education />
        </Route>
        <Redirect to="/404" />
      </div>
      </section>
    </main>
  )
}

export default Work;
