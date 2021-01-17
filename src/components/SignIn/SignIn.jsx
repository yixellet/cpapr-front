import React from "react";
import { BASE_URL } from '../../content/config';
import styles from './SignIn.module.css';

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: null,
      password: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { login, password } = this.state;
    fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: login,
        password: password,
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        const json = res.json();
        return json.then(Promise.reject.bind(Promise));
      })
      .then((data) => {
        localStorage.setItem('cpapr-token', data.jwt);
        this.props.onSignIn();
        window.location.replace('/');
      })
      .catch((err) => {
        throw err;
      });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <main className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.title}>Администрирование</h3>
          <form className={styles.form} name="signin" onSubmit={this.handleSubmit}>
            <div className={styles.input_block}>
              <p className={styles.label}>Логин</p>
              <input className={styles.input} id="login" type="text" name="login" required onChange={this.handleChange} />
            </div>
            <div className={styles.input_block}>
              <p className={styles.label}>Пароль</p>
              <input className={styles.input} id="password" type="password" name="password" required onChange={this.handleChange} />
            </div>
            <input className={styles.submit} id="submit" type="submit" name="password" value="Вход" />
          </form>
        </div>
      </main>
    )
  }
}

export default SignIn;
