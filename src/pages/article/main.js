import React, { Component } from "react";

class ArticleView extends Component {
  render() {
    console.log(this.props);
    const { match, location } = this.props;
    // location里面的state值虽然能用，但它只在发生路由跳转时才会携带，
    // 正常开发也肯定是拿id来请求后台数据，所有这个state只是演示，一般不会用到
    return (
      <div className="article">
        <div>
          文章ID：
          <span>{match.params.id}</span>
        </div>
        <div>
          文章作者：
          <span>{location.state.author}</span>
        </div>
        <div>
          文章标题：
          <span>{location.state.title}</span>
        </div>
      </div>
    );
  }
}

export default ArticleView;
