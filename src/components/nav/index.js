import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/activities">Activities</NavLink>
        <NavLink to="/topics">Topics</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    );
  }
}

export default Nav;
