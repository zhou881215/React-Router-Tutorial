import React from "react";
import { render } from "react-dom";
// npm install react-router-dom
import {
  BrowserRouter as Router,
  Route, // Route 一条一条的路由
  Switch, // Switch 匹配到一条后就不会再往下匹配， exact 严格匹配：路由一模一样才匹配
  Redirect, // Redirect 重定向
  // Link, // 无标识链接 --> 一般也就不用这个了
  NavLink // 有标识链接
} from "react-router-dom";
import "./styles/index.css";
import "./styles/reset.css";

import Home from "./pages/Home";
import Activities from "./pages/Activities";
import Topics from "./pages/Topics";
import Login from "./pages/Login";

const RouterApp = () => (
  <Router>
    <>
      <div className="nav">
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/activities">Activities</NavLink>
        <NavLink to="/topics">Topics</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
      <div className="content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/activities" component={Activities} />
          <Route path="/topics" component={Topics} />
          <Route path="/login" component={Login} />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  </Router>
);

render(<RouterApp />, document.getElementById("root"));
