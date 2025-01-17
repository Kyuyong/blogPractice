import "./navbar.scss";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Pages/context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="logo">LOGO</div>
      <div className="controls">
        {!currentUser ? (
          <>
            <Link className="link">Menu 01</Link>
            <Link className="link" to="/login">
              Login
            </Link>
          </>
        ) : (
          <>
            <div className="userName">Welcome, {currentUser.name}</div>
            <button className="logoutButton" onClick={logout}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
