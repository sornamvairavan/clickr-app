import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import './LoginForm.css'

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      {/* <img src="../images/c.png" alt="logo" className="c-logo" /> */}
      <h1 className="form-title">Log in to Clickr</h1>
      {errors.length > 0 && <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>}
      <div className="input-container">
        <label htmlFor="credential">
          Username or Email
        </label>
        <input
          type="text"
          name="credential"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
        <label htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
       <button type="submit" className="auth-button">Log In</button>
       <p>Not a Clickr Member? <Link to="/signup">Sign up here.</Link></p>
      </div>
    </form>
  );
}

export default LoginFormPage;