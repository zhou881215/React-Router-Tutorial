import React, { Component } from "react";
import ActivitiesNav from "./activitiesNav";
import ActivitiesView from "./main";
import "./styles/main.css";

class Activities extends Component {
  render() {
    return (
      <>
        <ActivitiesNav />
        <ActivitiesView />
      </>
    );
  }
}

export default Activities;
