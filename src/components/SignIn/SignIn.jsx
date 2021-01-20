import React from "react";
import styles from './SignIn.module.css';

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      password: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.api.signin(username, password)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        const json = res.json();
        return json.then(Promise.reject.bind(Promise));
      })
      .then((data) => {
        localStorage.setItem('access', data.jwt);
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
              <input className={styles.input} id="username" type="text" name="username" required onChange={this.handleChange} />
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
