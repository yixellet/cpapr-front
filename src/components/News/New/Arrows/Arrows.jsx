import React from "react";
import { Link } from "react-router-dom";

import classes from './Arrows.module.css';

class Arrows extends React.Component {
  render() {
    return (
      <div className={classes.block}>
        <Link to={this.props.linkToPrev}>&larr; Предыдущая новость</Link>
        <Link to='/news'>&uarr; К списку новостей</Link>
        <Link to={this.props.linkToNext}>Следующая новость &rarr;</Link>
      </div>
    )
  }
}

export default Arrows;
