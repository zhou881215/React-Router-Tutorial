import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopicsView extends Component {
  state = {
    articleList: JSON.parse(localStorage.getItem("articleList")) || []
  };

  handleDelete = index => {
    const { articleList } = this.state;
    articleList.splice(index, 1);
    this.setState({ articleList });
    localStorage.setItem("articleList", JSON.stringify(articleList));
  };

  render() {
    const { articleList } = this.state;
    if (!articleList.length) {
      return <div>No topics now</div>;
    }
    return (
      <ul className="topics">
        {articleList.map((item, index) => (
          <li key={item.id} className="topic-box">
            <h5>
              {`作者： ${item.author}`}{" "}
              <button onClick={() => this.handleDelete(index)}>Delete</button>
            </h5>
            <h6> {`时间： ${item.time}`}</h6>
            <Link
              to={{
                pathname: `/article/${item.id}`,
                state: {
                  author: item.author,
                  title: item.title,
                  time: item.time
                }
              }}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default TopicsView;
