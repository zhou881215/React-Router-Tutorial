import React, { Component } from "react";
import ArticleView from "./main";
import "./styles/main.css";

class Article extends Component {
  render() {
    return <ArticleView {...this.props} />;
  }
}

export default Article;
