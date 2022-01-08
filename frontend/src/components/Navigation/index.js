import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css'

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className="navlinks" to="/login">Log In</NavLink>
        <NavLink className="navlinks" to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink className="navlinks" exact to="/">
          {/* <img src="../images/Clickr-logo.png" alt="home" className="logo"/> */}
          Home
        </NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;