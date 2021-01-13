import React from "react";
import PageTitle from '../PageTitle/PageTitle';

import mainBlockStyles from '../CommonMainBlock/CommonMainBlock.module.css';

class About extends React.Component {
  render() {
    return (
      <main className={mainBlockStyles.background}>
        <section className={mainBlockStyles.content}>
        <PageTitle name="О нас"/>
        </section>
      </main>
    )
  }
}

export default About;
