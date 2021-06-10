import React from "react";
import profile from "../images/profile-photo.jpg";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <nav className="nav">
        <div className="profile">
          <img src={profile} alt="Profile" />
        </div>

        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/about" exact activeClassName="active">
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/portfolio" exact activeClassName="active">
              Portfolio
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/blogs" exact activeClassName="active">
              Blogs
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/contact" exact activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>

        <footer className="footer">
          <p>Copyright @2021 Nguyen Bach Nghia</p>
        </footer>
      </nav>
    </div>
  );
};

export default NavigationBar;
