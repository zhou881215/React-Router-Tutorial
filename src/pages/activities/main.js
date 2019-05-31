import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Recommended from "./recommended";
import All from "./all";
import Articles from "./articles";
import Pins from "./pins";

class ActivitiesView extends Component {
  render() {
    return (
      <div className="inner-content">
        <Switch>
          <Route path="/activities/recommended" component={Recommended} />
          <Route path="/activities/all" component={All} />
          <Route path="/activities/articles" component={Articles} />
          <Route path="/activities/pins" component={Pins} />
          <Redirect to="/activities/recommended" />
        </Switch>
      </div>
    );
  }
}

export default ActivitiesView;
