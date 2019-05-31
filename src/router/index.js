import React, { Component } from "react";
// npm install react-router-dom
import {
  BrowserRouter as Router, // 换个名，方便后面更换成hashRouter
  Route, // Route 一条一条的路由
  Switch, // Switch 匹配到一条后就不会再往下匹配， exact 严格匹配：路由一模一样才匹配
  Redirect // Redirect 重定向
  // Link, // 无标识链接 --> 一般也就不用这个了
  // NavLink // 有标识链接
} from "react-router-dom";

import RouterApp from "./RouterApp"; // 把路由包在自定义组件里面，用this.props.children引入

import Home from "../pages/home/";
import Activities from "../pages/activities";
import Topics from "../pages/topics";
import Login from "../pages/login";
import Article from "../pages/article";

import "./styles/index.css";

class App extends Component {
  render() {
    return (
      <Router>
        <RouterApp>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/activities" component={Activities} />
            <Route path="/topics" component={Topics} />
            <Route path="/article/:id" component={Article} />
            {/* 动态路由就是加个:value */}
            <Route path="/login" component={Login} />
            <Redirect to="/" />
          </Switch>
        </RouterApp>
      </Router>
    );
  }
}

export default App;
