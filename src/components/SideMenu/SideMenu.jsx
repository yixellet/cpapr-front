import React from "react";

import SideMenuItem from './SideMenuItem/SideMenuItem';

import styles from './SideMenu.module.css';

class SideMenu extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div className={styles.side_menu}>
        <button className={styles.button}/>
        <ul className={styles.list}>
          {
            this.props.list.map((item) => {
              return (<SideMenuItem onClick={this.props.handleClick.bind(this, item)} key={item} name={item} isActive={this.props.activeDocumentType === item}/>)
            })
          }
        </ul>
      </div>
    )
  }
}

export default SideMenu;
