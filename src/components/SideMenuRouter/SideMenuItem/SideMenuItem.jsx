import React from "react";
import { NavLink, useRouteMatch } from 'react-router-dom';

import styles from './SideMenuItem.module.css';

function SideMenuItem(props) {
  const { url } = useRouteMatch();
  
  return (
    <li className={styles.item}>
        <NavLink onClick={props.onClick} to={`${url}/${props.content.link}`} className={styles.link} activeClassName={styles.link_active}>{props.content.name}</NavLink>
    </li>
  )
}

export default SideMenuItem;
