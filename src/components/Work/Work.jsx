import React from "react";
import PageTitle from '../PageTitle/PageTitle';

import mainBlockStyles from '../CommonMainBlock/CommonMainBlock.module.css';

class Work extends React.Component {
  render() {
    return (
      <main className={mainBlockStyles.background}>
        <section className={mainBlockStyles.content}>
        <PageTitle name="Деятельность"/>
        </section>
      </main>
    )
  }
}

export default Work;
