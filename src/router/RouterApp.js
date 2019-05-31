import React, { Component } from "react";
import Nav from "../components/nav";

class RouterApp extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="routerApp">
        <Nav />
        <div className="content">{children}</div>
      </div>
    );
  }
}

export default RouterApp;
