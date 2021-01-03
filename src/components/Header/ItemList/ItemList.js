import React from 'react';
import MenuItem from '../MenuItem/MenuItem';

import './ItemList.css';
import './menu__item.css';

class ItemList extends React.Component {

  render() {
    return (
      <ul className="menu__list menu__list_hide">
      {this.props.list.map((item) => {
        if (item.sub === null) {
          return <li className="menu__item">
            <MenuItem link={item.link} name={item.name} key={item.id}/>
          </li>
        } else {
          return <li className="menu__item">
            <MenuItem link={item.link} name={item.name} key={item.id} sub={true}/>
            <ItemList list={item.sub}/>
          </li>
        }
      })}
      </ul>
    )
  }
}

export default ItemList;
