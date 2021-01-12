import React from "react";

import './SideMenuItem.css';

class MenuItem extends React.Component {

  render() {
    const { name, isActive } = this.props;
    return (
      <li className={isActive ? 'sidemenu__item sidemenu__item_active' : 'sidemenu__item'}>
          {name}
      </li>
    )
  }
}

export default MenuItem;
