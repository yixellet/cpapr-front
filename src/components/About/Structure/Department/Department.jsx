import React from "react";

import Employee from './Employee/Employee';

import styles from './Department.module.css';

class Department extends React.Component {
  render() {
    return (
      <li className={styles.department}>
        {this.props.data.name ? <h3 className={styles.name}>{this.props.data.name}</h3> : ''}
        <ul className={styles.employeeList}>
          {
            this.props.data.department.map((employee) => {
              return (<Employee key={employee.id} name={employee.name} image={employee.image} position={employee.position} phoneNumber={employee.phone_number}/>)
            })
          }
        </ul>
      </li>
    )
  }
}

export default Department;
