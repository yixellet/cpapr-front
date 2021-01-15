import React from "react";

import styles from './Paginator.module.css';

class Paginator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pages: this.generatePagesArray(this.countPages(this.props.data.count, 10)),
    }
    
  }

  countPages(totalResults, pageSize) {
    return (Math.ceil(totalResults / pageSize))
  }

  generatePagesArray(size) {
    const pages = [];
    for (let i=1; i <= size; i++) {
      pages.push(i)
    }
    return pages;
  }

  render() {
    const { pages } = this.state;
    return (
      <ul className={styles.container}>
        {
          pages.map((page) => {            
            return (<li key={page} className={this.props.currentPage === page ? styles.current : styles.regular}><button onClick={() => this.props.onPageChange(page)}>{page}</button></li>)
          })
        }
      </ul>
    )
  }
}

export default Paginator;
