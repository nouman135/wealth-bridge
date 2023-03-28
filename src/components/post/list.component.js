import React, { Component } from "react";
import PostService from "../../services/post.service";
import withRouter from "../../helper/HOC";
import { convertISODateTime } from "../../helper/date";
import "./list.css";

export default withRouter(
  class List extends Component {
    constructor(props) {
      super(props);

      this.state = {
        posts: [],
      };

      this.addPost = this.addPost.bind(this);
      this.editPost = this.editPost.bind(this);
      this.deletePost = this.deletePost.bind(this);

      this.navigate = this.props.navigate;
    }

    deletePost(id) {
      PostService.deletePost(id).then((res) => {
        this.setState({
          posts: this.state.posts.filter((post) => post.id !== id),
        });
      });
    }

    editPost(id) {
      this.navigate(`/add-post/${id}`);
    }

    componentDidMount() {
      PostService.getPosts().then((res) => {
        this.setState({ posts: res.data.posts });
      });
    }

    addPost() {
      this.navigate(`/add-post/_add`);
    }

    render() {
      return (
        <div className="container-fluid">
          <header>
            <h2>Dashboard</h2>
            <div className="header-buttons">
              <button>Add RM</button>
              <button onClick={() => this.addPost()}>Add New Idea</button>
            </div>
          </header>
          <main className="row">
            {this.state.posts.map((post) => (
              <div key={post.id} className="col-md-6 col-xs-8 col-12 my-2 ">
                <div className="card shadow-sm text-center h-100" key={post.id}>
                  <div className="card-header">
                    <h3>{post.title}</h3>
                    <p className="card-title">{post.category}</p>
                  </div>
                  <div className="card-body">
                    <p className="card-text">{post.description}</p>
                    <p className="card-text">
                      {convertISODateTime(post.updated_at)}
                    </p>
                  </div>
                  <div className="card-footer">
                    <button
                      className="btn btn-sm"
                      onClick={() => this.editPost(post.id)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.deletePost(post.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </main>
        </div>
      );
    }
  }
);
