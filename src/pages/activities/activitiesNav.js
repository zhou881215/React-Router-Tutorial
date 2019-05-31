import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ActivitiesNav extends Component {
  render() {
    return (
      <div className="activities-nav">
        <NavLink to="/activities/recommended">Recommended</NavLink>
        <NavLink to="/activities/all">All</NavLink>
        <NavLink to="/activities/articles">Articles</NavLink>
        <NavLink to="/activities/pins">Pins</NavLink>
      </div>
    );
  }
}

export default ActivitiesNav;
