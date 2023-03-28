import React, { Component } from "react";
import PostService from "../../services/post.service";
import withRouter from "../../helper/HOC";
import { convertISODateTime } from "../../helper/date"
import "./list.css";

export default withRouter (class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };

    this.addPost = this.addPost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  deletePost(id) {
    PostService.deletePost(id).then((res) => {
      this.setState({
        posts: this.state.posts.filter((post) => post.id !== id),
      });
    });
  }

  editPost(id) {
    const { navigate } = this.props;
    navigate(`/add-post/${id}`);
  }

  componentDidMount() {
    PostService.getPosts().then((res) => {
      this.setState({ posts: res.data.posts });
    });
  }

  addPost() {
    const { navigate } = this.props;
    navigate(`/add-post/_add`);
  }

  render() {
    return (
      <div>
        <header>
          <h2>Dashboard</h2>
          <div className="header-buttons">
            <button>Add RM</button>
              <button onClick={() => this.addPost()}>Add New Idea</button>
          </div>
        </header>
        <main>
          {this.state.posts.map((post) => (
            <ul className="idea-list" key={post.id}>
              <li className="idea-item">
                <div className="idea-title">Title: {post.title}</div>
                <div className="idea-category">Category: {post.category}</div>
                <div className="idea-description">
                  Description: {post.description}
                </div>
                <div className="idea-date">
                  Created At: {convertISODateTime(post.created_at)}
                </div>
                <div className="idea-date">
                  Updated At: {convertISODateTime(post.updated_at)}
                </div>
                <div className="idea-actions">
                    <button onClick={() => this.editPost(post.id)}>
                      Update{" "}
                    </button>
                  <button onClick={() => this.deletePost(post.id)}>
                    Delete{" "}
                  </button>
                  <button>Share</button>
                </div>
              </li>
            </ul>
          ))}
        </main>
      </div>
    );
  }
})
