import React from "react";
import { Route, useRouteMatch } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';
import SideMenuRouter from '../SideMenuRouter/SideMenuRouter';
import History from './History/History';
import Structure from './Structure/Structure';

import mainBlockStyles from '../CommonMainBlock/CommonMainBlock.module.css';
import aboutStyles from './About.module.css';

import structureData from '../../content/structure';

function About(props) {
  const { path } = useRouteMatch();
  return (
    <main className={mainBlockStyles.background}>
      <section className={mainBlockStyles.content}>
        <PageTitle name="О нас"/>
        <div className={aboutStyles.body}>
          <SideMenuRouter list={props.blockList} />
          <Route path={`${path}/history`}>
            <History />
          </Route>
          <Route path={`${path}/structure`}>
            <Structure structure={structureData} />
          </Route>
        </div>
      </section>
    </main>
  )
}

export default About;
