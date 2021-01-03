import React from 'react';
import Logo from '../Logo/Logo';
import ItemList from './ItemList/ItemList';
import MenuButton from './MenuButton/MenuButton';

import './Header.css';
import './__content/header__content.css';

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: true
    }
  }

  render() {
    return (
      <header className="header">
        <div className="header__content">
          <Logo />
          <nav className="header__menu">
            <MenuButton />
            <ItemList list={this.props.structure} />
          </nav>
        </div>
      </header>
    )
  }
}

export default Header;
