import React from "react";
import { NavLink } from "react-router-dom";

import './MenuItem.css';

class MenuItem extends React.Component {

  render() {
    return (
      <li className="menu__item" onClick={this.props.onClick}>
        <NavLink className="menu__item-link" activeClassName="menu__item-link_active" exact to={this.props.link}>
          <p className="menu__item-text">{this.props.name}</p>
        </NavLink>
      </li>
    )
  }
}

export default MenuItem;
