import React from "react";

import styles from './Lead.module.css';

class Lead extends React.Component {

  style = {
    backgroundImage: `url(${this.props.content.image})`
  }
  render() {
    return (
      <section className={styles.lead} style={this.style}>
        <h1 className={styles.maintitle}>Центр<br/>пространственной аналитики<br/>и промышленного развития</h1>
      </section>
    )
  }
}

export default Lead;
