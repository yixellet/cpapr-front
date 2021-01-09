import React from 'react';

import './MenuButton.css';

class MenuButton extends React.Component {

  render() {
    return(
      <button onClick={this.props.onClick} className="menu__button"></button>
    )
  }
}

export default MenuButton;