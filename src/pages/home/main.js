import React, { Component } from "react";

class HomeView extends Component {
  authorInput = React.createRef();
  titleInput = React.createRef();

  onSubmit = e => {
    e.preventDefault();
    const author = this.authorInput.current.value;
    const title = this.titleInput.current.value;
    const id = Math.floor(Math.random() * 100000000000000);
    const article = {
      author,
      title,
      id
    };
    this.sendArticle(article);
    this.authorInput.current.value = "";
    this.titleInput.current.value = "";
  };

  sendArticle = article => {
    const articleList = JSON.parse(localStorage.getItem("articleList")) || [];
    articleList.push(article);
    localStorage.setItem("articleList", JSON.stringify(articleList));
    this.jumpToTopics();
  };

  jumpToTopics = () => {
    const { history } = this.props;
    history.push("/topics");
  };

  render() {
    return (
      <div className="home">
        <h4>发表话题：</h4>
        <form onSubmit={this.onSubmit}>
          <div className="form-box">
            <label htmlFor="author">作者姓名：</label>
            <input id="author" required ref={this.authorInput} />
          </div>
          <div className="form-box">
            <label htmlFor="title">文章标题：</label>
            <input id="title" required ref={this.titleInput} />
          </div>
          <button className="confirm-btn">提交</button>
        </form>
      </div>
    );
  }
}

export default HomeView;
