import React from "react";

import SideMenuItem from './SideMenuItem/SideMenuItem';

import styles from './SideMenuRouter.module.css';

class SideMenuRouter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.handleSideMenuOpenOrClose = this.handleSideMenuOpenOrClose.bind(this)
  }

  handleSideMenuOpenOrClose() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    return (
      <div className={this.state.isOpen ? `${styles.side_menu} ${styles.side_menu_open}` : `${styles.side_menu} ${styles.side_menu_closed}`}>
        <button onClick={this.handleSideMenuOpenOrClose} className={styles.button}/>
        <ul className={styles.list}>
          {
            this.props.list.map((item, index) => {
              return (<SideMenuItem onClick={this.handleSideMenuOpenOrClose} key={index} content={item} />)
            })
          }
        </ul>
      </div>
    )
  }
}

export default SideMenuRouter;
