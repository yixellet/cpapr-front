import React from 'react';
import MenuItem from '../MenuItem/MenuItem';

import './ItemList.css';

class ItemList extends React.Component {
  constructor(props) {
    super(props)
    this.handleSignOut = this.handleSignOut.bind(this);
  }
  
  handleSignOut() {
    localStorage.removeItem('cpapr-token');
    this.props.onSignOut();
  }

  render() {
    return (
      <>
        <div className={this.props.isOpen ? "menu__overlay" : "menu__overlay_hide"}></div>
        <ul className={this.props.isOpen ? "menu__list menu__list_visible" : "menu__list menu__list_hide"}>
          <li className="menu__item" onClick={this.props.onClick}><p className="menu__item-text">Назад</p></li>
          {this.props.list.map((item) => {
              return <MenuItem link={item.link} name={item.name} key={item.id} onClick={this.props.onClick}/>
            }
          )}
          {this.props.isAdmin ? <button onClick={this.handleSignOut} className="exit_admin">Выход</button> : null}
        </ul>
      </>
    )
  }
}

export default ItemList;
