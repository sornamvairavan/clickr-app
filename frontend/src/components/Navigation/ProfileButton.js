import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { NavLink, Link, Redirect } from "react-router-dom";
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    return (
      <Redirect to="/" />
    )
  };


  return (
    <>
      <div className="profile-right-nav">
        <NavLink className="photo-tabs" to="/" exact>You</NavLink>
        <NavLink className="photo-tabs" to="/explore">Explore</NavLink>
        <Link to="/uploadPhoto">
          <i className="fas fa-cloud-upload-alt fa-lg" title="Upload Photo" />
        </Link>
      <span className="welcome-user">Welcome {user.fullName}!</span>
        <button onClick={openMenu} className="user-button">
          <i className="fas fa-user" />
        </button>
        {showMenu && (
          <ul className="profile-dropdown">
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li>
              <button onClick={logout} className="logout-button">Log Out</button>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default ProfileButton;