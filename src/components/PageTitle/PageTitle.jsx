import React from "react";
import classes from './PageTitle.module.css';

class PageTitle extends React.Component {
  render() {
    return (
      <h2 className={classes.pageTitle}>{this.props.name}</h2>
    )
  }
}

export default PageTitle;
