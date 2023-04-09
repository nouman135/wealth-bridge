import React, { Component } from "react";
import PostService from "../../services/post.service";
import withRouter from "../../helper/HOC";
import { convertISODateTime } from "../../helper/date";
import "./list.component.css";

export default withRouter(
  class List extends Component {
    constructor(props) {
      super(props);

      this.state = {
        posts: [],
      };

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

    showPosts() {
      return this.state.posts.map((post) => (
        <div key={post.id} className="col-md-4 col-xs-8 col-12 my-2 ">
          <div className="card shadow-sm text-center h-100" key={post.id}>
            <div className="card-header">
              <figure>
                <blockquote className="blockquote">
                  <p>{post.title}</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  {post.category}
                </figcaption>
              </figure>
            </div>
            <div className="card-body">
              <p className="card-text">{post.description}</p>
            </div>
            <small className="text-muted my-2">
              {convertISODateTime(post.updated_at)}
            </small>
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
      ));
    }

    render() {
      return (
        <>
          <main className="row">{this.showPosts()}</main>
        </>
      );
    }
  }
);
