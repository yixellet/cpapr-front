import React from 'react';
import MenuItem from '../MenuItem/MenuItem';

import './ItemList.css';

class ItemList extends React.Component {

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
        </ul>
      </>
    )
  }
}

export default ItemList;
