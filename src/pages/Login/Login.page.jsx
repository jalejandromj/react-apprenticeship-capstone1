import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { useAuth } from '../../providers/Auth';
import loginApi from './login.api.js';
import './Login.styles.css';

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();
  const [errorLogIn, setErrorLogIn] = useState(false);

  async function authenticate(event) {
    event.preventDefault();
    await loginApi(event.target.username.value, event.target.password.value)
      .then(function (response) {
        // handle success
        console.log('[SUCCESS] Logged in...', response);
        login();
        history.push('/');
      })
      .catch(function (error) {
        // handle error
        console.log('[ERROR] Failed to log in...', error);
        setErrorLogIn(true);
      });

    //history.push('/secret'); Funny RickRoll, huh...
  }

  return (
    <section className="login">
      <h1>Welcome back!</h1>
      <form onSubmit={authenticate} className="login-form">
        <div className="form-group">
          <label htmlFor="username">
            <strong>username </strong>
            <input required type="text" id="username" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>password </strong>
            <input required type="password" id="password" />
          </label>
        </div>
        {errorLogIn ? (
          <div>
            <p style={{ color: 'red' }}>
              Failed to log in. Please check your credentials.
            </p>
          </div>
        ) : null}
        <button type="submit">login</button>
      </form>
    </section>
  );
}

export default LoginPage;
