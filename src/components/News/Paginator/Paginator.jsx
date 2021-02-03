import React from "react";

import styles from './Paginator.module.css';

class Paginator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pages: this.generatePagesArray(Math.ceil(this.props.data.count / this.props.pagesize)),
    }
    
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
      <nav className={styles.container}>
        <ul className={styles.list}>
          {
            pages.map((page) => {            
              return (<li key={page}><button className={this.props.currentPage === page ? `${styles.page} ${styles.page_current}` : styles.page} onClick={() => this.props.onPageChange(page)}>{page}</button></li>)
            })
          }
        </ul>
      </nav>
    )
  }
}

export default Paginator;
