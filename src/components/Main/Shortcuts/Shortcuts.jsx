import React from "react";
import Shortcut from './Shortcut/Shortcut';

import styles from './Shortcuts.module.css';

class Shortcuts extends React.Component {

  render() {
    return (
      <section className={styles.shortcuts}>
        <ul>
          {this.props.content.map((item) => {
            return <Shortcut name={item.name} link={item.link} key={item.id}/>
          })}
        </ul>
      </section>
    )
  }
}

export default Shortcuts;
