import React from "react";

const ArticleView = ({ match, location: { state } }) => (
  // location里面的state值虽然能用，但它只在发生路由跳转时才会携带，
  // 正常开发也肯定是拿id来请求后台数据，所有这个state只是演示，一般不会用到
  <div className="article">
    <div>
      文章ID：
      <span>{match.params.id}</span>
    </div>
    <div>
      文章作者：
      <span>{state.author}</span>
    </div>
    <div>
      文章标题：
      <span>{state.title}</span>
    </div>
    <div>
      发布时间：
      <span>{state.time}</span>
    </div>
  </div>
);

export default ArticleView;
