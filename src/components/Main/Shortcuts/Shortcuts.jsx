import React from "react";
import Shortcut from './Shortcut/Shortcut';

import styles from './Shortcuts.module.css';

class Shortcuts extends React.Component {

  render() {
    return (
      <section className={styles.section}>
        <ul className={styles.shortcuts}>
          {this.props.content.map((item) => {
            return <Shortcut name={item.name} link={item.link} key={item.id}/>
          })}
        </ul>
      </section>
    )
  }
}

export default Shortcuts;
