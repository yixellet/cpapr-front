import React from "react";

import styles from './Employee.module.css';

class Employee extends React.Component {
  render() {
    return (
      <li className={styles.employee}>
        {this.props.image ? <img className={styles.image} src={this.props.image} alt={this.props.name}/> : ''}
        <div className={styles.info}>
          <p className={styles.name}>{this.props.name}</p>
          <p className={styles.position}>{this.props.position}</p>
          <p className={styles.phoneNumber}>{this.props.phoneNumber}</p>
        </div>
      </li>
    )
  }
}

export default Employee;
