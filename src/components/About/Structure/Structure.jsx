import React from "react";

import Department from './Department/Department';

import styles from './Structure.module.css';

class Structure extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      structure: [],
      isFetching: true,
    }
  }

  componentDidMount() {
    this.props.api.getStructure()
      .then((data) => {
        this.setState({
          structure: data,
          isFetching: false,
        })
      })
  }

  render() {
    const { isFetching, structure } = this.state;
    return (
      <ul className={styles.departmentList}>
        {
          isFetching ?
          <p>Загрузка данных...</p> :
          structure.map((department) => {
            return (<Department data={department}  key={department.id}/>)
          })
        }
      </ul>
    )
  }
}

export default Structure;
