import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
const Navbar = () => {
  const {userToken}=useAuth();
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="navbar-brand h2 fw-600">
          VideoAlley
        </Link>
        <button className="button navbar-toggler" type="button">
          <span className="icon">
            <i className="fas fa-bars"></i>
          </span>
        </button>
        <div className="navbar-item search-container">
          <input type="search" className="input search" placeholder="Search" />
          <button className="search-icon">
            <i className="far fa-search"></i>
          </button>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
           {userToken?(<Link to="/profile" title="profile">
              <i className="fas fa-user"></i>
            </Link>):(<Link to="/login" title="login">
              <i className="fas fa-sign-in"></i>
            </Link>)
            }
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Navbar };
