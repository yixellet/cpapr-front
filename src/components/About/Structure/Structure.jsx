import React from "react";

import Department from './Department/Department';

import styles from './Structure.module.css';

class Structure extends React.Component {
  render() {
    return (
      <ul className={styles.departmentList}>
        {
          this.props.structure.map((department) => {
            return (<Department data={department}  key={department.id}/>)
          })
        }
      </ul>
    )
  }
}

export default Structure;
