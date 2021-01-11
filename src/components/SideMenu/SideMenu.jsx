import React from "react";

import styles from './SideMenu.module.css';

class SideMenu extends React.Component {
  render() {
    return (
      <div className={styles.side_menu}>
        <button className={styles.button}/>
        <ul className={styles.list}>
          {
            this.props.list.map((item) => {
              return (<li className={styles.item} key={item}>{item}</li>)
            })
          }
        </ul>
      </div>
    )
  }
}

export default SideMenu;
