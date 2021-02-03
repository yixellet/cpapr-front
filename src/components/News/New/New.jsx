import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import mainBlockStyles from '../../CommonMainBlock/CommonMainBlock.module.css';
import styles from './New.module.css';
import nfstyles from '../../PageNotFound/PageNotFound.module.css';

class New extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isFetching: false,
      content: {},
      error: null,
      text: [],
    }
  }

  componentDidMount() {
    this.setState({isFetching: true})
    this.props.api.getNewItem(this.props.match.params.id)
      .then(
        (data) => {
        this.setState({
          isFetching: false,
          content: data,
          text: data.text.split('\n'),
        })
      },
      (error) => {
        this.setState({
          error: error
        })
      })
  }

  render() {
    const { content, isFetching, text, error } = this.state;
    return (
      <main className={mainBlockStyles.background}>
        <section className={mainBlockStyles.content}>
          {
            error ? 
           <>
           <h1 className={nfstyles.title}><span className={nfstyles.title_span}>404</span> - страница не найдена</h1>
           <h2 className={nfstyles.subtitle}>Ой, здесь ничего нет :(</h2></> :
            isFetching ?
            <p>ЗАГРУЗКА ДАННЫХ...</p> :
            <div className={styles.container}>
              <Link to="/news" onClick={this.props.onBackClick} className={styles.arrow}>&larr; Назад к списку</Link>
              {content.image ? <img className={styles.image} alt={content.title} src={content.image}/> : null }
              <div className={styles.textContent}>
                <h2 className={styles.title}>{content.title}</h2>
                <p className={styles.date}>{this.props.dateConverter(content.date_publisher)}</p>
                {
                  text.map((i, index) => {
                    return (<p className={styles.text} key={index}>{i}</p>)
                  })
                }
              </div>
            </div>
          }
        </section>
      </main>
    )
  }

}

export default withRouter(New);
