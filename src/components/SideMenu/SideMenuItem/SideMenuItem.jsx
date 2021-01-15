import React from "react";

import styles from './SideMenuItem.module.css';

class SideMenuItem extends React.Component {

  render() {
    return (
      <li onClick={this.props.onItemClick} className={this.props.isActive ? `${styles.item} ${styles.item_active}` : styles.item}>
          {this.props.content.typeName}
      </li>
    )
  }
}

export default SideMenuItem;
