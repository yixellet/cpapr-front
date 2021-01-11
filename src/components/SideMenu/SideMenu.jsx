import React from "react";
import { NavLink } from "react-router-dom";

import styles from './SideMenu.module.css';

class SideMenu extends React.Component {
  render() {
    return (
      <div className={styles.side_menu}>
        <button className={styles.button}/>
        <ul className={styles.list}>'eeee'</ul>
      </div>
    )
  }
}

export default SideMenu;
