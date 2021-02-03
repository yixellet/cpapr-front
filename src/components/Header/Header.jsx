import React from 'react';
import Logo from '../Logo/Logo';
import ItemList from './ItemList/ItemList';
import MenuButton from './MenuButton/MenuButton';

import styles from './Header.module.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
  }

  handleMenuOpen() {
    this.setState({isOpen: true});
  }

  handleMenuClose() {
    this.setState({isOpen: false});
  }

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.content}>
          <Logo />
          <nav>
            <MenuButton onClick={this.handleMenuOpen}/>
            <ItemList list={this.props.structure} isOpen={this.state.isOpen} onClick={this.handleMenuClose} isAdmin={this.props.isAdmin} onSignOut={this.props.onSignOut} />
          </nav>
        </div>
      </header>
    )
  }
}

export default Header;
