import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function Navigation({ isLoaded }){
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const demoLogin = e => {
    return dispatch(sessionActions.login({credential: "Demo-lition", password: "password"}))
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />  
      </>
    );
  } else {
    sessionLinks = (
      <>
        <Link id="demo-button" onClick={demoLogin}>Demo</Link>
        <NavLink id="login-button" to="/login">Log In</NavLink>
        <NavLink id="signup-button" to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
  <div className="nav-bar">
    <span className="left-nav-bar">
      <NavLink id="logo" exact to="/">
        <img src="/images/clickr-logo.PNG" alt="home" className="logo-img"/>
      </NavLink>
    </span>
    <span className="right-nav-bar">
      {isLoaded && sessionLinks}
    </span>
  </div>
  );
}

export default Navigation;