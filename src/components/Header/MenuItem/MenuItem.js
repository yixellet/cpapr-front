import React from "react";
import { Link } from "react-router-dom";

import './MenuItem.css';
import './menu__item-text.css';

class MenuItem extends React.Component {

  render() {
    return (
      <Link className="menu__item-link" to={this.props.link}>
        <p className="menu__item-text">{this.props.name}
        {this.props.sub === true ? <span className="menu__item-text_span">▼</span> : ''}</p>
      </Link>
    )
  }
}

export default MenuItem;
