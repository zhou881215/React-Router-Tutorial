import React, { Component } from "react";
import Nav from "../components/nav";

class RouterApp extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="routerApp">
        {/* 高阶组件 -> 一个组件导出另一个组件 */}
        {/* <Route component={ Nav }></Route> */}
        <Nav />
        <div className="content">{children}</div>
      </div>
    );
  }
}

export default RouterApp;
