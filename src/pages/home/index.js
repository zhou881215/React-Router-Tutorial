import React, { Component } from "react";
import HomeView from "./main";
import "./styles/main.css";

class Home extends Component {
  render() {
    return <HomeView {...this.props} />;
  }
}

export default Home;
