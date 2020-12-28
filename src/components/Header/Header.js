import React from 'react';
import Logo from '../Logo/Logo';
import ItemList from './ItemList/ItemList';

import './Header.css';
import './__content/header__content.css';

class Header extends React.Component {

  render() {
    return (
      <header className="header">
        <div className="header__content">
          <Logo />
          <nav className="header__menu">
            <ItemList list={this.props.structure} />
          </nav>
        </div>
      </header>
    )
  }
}

export default Header;
