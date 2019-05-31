import React, { Component } from "react";
import {
  //  Route,
  NavLink,
  withRouter
} from "react-router-dom";
// withRouter 是在不是页面组件，又想使用react-router的功能
import "./nav.css";

// 模拟withRouter,一个函数导出一个函数组件，这个组件里面是高阶组件（组件导出组件）
// const withRouter = ( Component ) => () => <Route component={ Component }></Route>

class Nav extends Component {
  handleClick = () => {
    console.log(this.props);
    const { history } = this.props;
    history.push("/");
  };

  render() {
    return (
      <div className="nav">
        <span className="logo" onClick={this.handleClick}>
          React-Router-withRouter
        </span>
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

export default withRouter(Nav);
