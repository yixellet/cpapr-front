import React from "react";
import Lead from './Lead/Lead';
import Shortcuts from './Shortcuts/Shortcuts';
import Newsblock from './Newsblock/Newsblock';

import styles from './Main.module.css';

class Main extends React.Component {
  render() {
    return (
      <main className={styles.background}>
        <div className={styles.content}>
          <Lead content={this.props.mainPageContent.lead}/>
          {/* <Shortcuts content={this.props.mainPageContent.shortcuts} /> */}
          {/* <Newsblock newsArray={this.props.news.slice(0,4)}/> */}
        </div>
      </main>
    )
  }
}

export default Main;
