import React from "react";
import { withRouter } from "react-router";

import mainBlockStyles from '../../CommonMainBlock/CommonMainBlock.module.css';
import styles from './New.module.css';

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
    fetch(`${this.props.url}/news/${this.props.match.params.id}/`)
    .then((res) => {
      if (res.status === 404) {
        window.location.replace('/404');
      }
      return res.json();
    })
    .then((data) => {
      this.setState({
        isFetching: false,
        content: data,
        text: data.text.split('\n'),
      });
    })
  }

  render() {
    const { content, isFetching, text } = this.state;
    return (
      <main className={mainBlockStyles.background}>
        <section className={mainBlockStyles.content}>
            {
              isFetching ?
              <p>ЗАГРУЗКА ДАННЫХ...</p> :
              <div className={styles.container}>
                {content.image ? <img className={styles.image} alt="illustration" src={content.image}/> : null }
                <div className={styles.textContent}>
                  <h2 className={styles.title}>{content.title}</h2>
                  <p className={styles.date}>{this.props.dateConverter(content.date_publisher)}</p>
                  {
                    text.map((i) => {
                      return (<p className={styles.text}>{i}</p>)
                    })
                  }
                  {/* <p className={styles.text}>{content.text}</p> */}
                </div>
              </div>
            }
        </section>
      </main>
    )
  }

}

export default withRouter(New);
