import React from 'react';

import './MenuButton.css';

class MenuButton extends React.Component {

  handleClick() {
    console.log('---', 'clicked')
  }

  render() {
    return(
      <button onClick={this.handleClick} className="menu__button"></button>
    )
  }
}

export default MenuButton;