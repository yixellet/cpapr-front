import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

export default class Logo extends React.Component {
  render() {
    return(
      <Link to="/" className="header__logo"></Link>
    )
  }
}
