import React, { Component } from "react";
import PostService from "../../services/post.service";


export default class List extends Component {
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

  viewPost(id) {
    this.props.history.push(`/view-post/${id}`);
  }

  editPost(id) {
    this.props.history.push(`/add-post/${id}`);
  }

  componentDidMount() {
    PostService.getPosts().then((res) => {
      this.setState({ posts: res.data.posts });
    });
  }

  addPost(){
    this.props.history.push('/add-post/_add');
}

  render() {
    return (
      <div>
        <h2 className="text-center">Post List</h2>
        <div className="row">
          <button
            className="btn btn-primary" onClick={this.addPost}>
            {" "}
            Add Post
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Title</th>
                <th> Description</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((post) => (
                <tr key={post.id}>
                  <td> {post.title} </td>
                  <td> {post.description}</td>
                  <td>
                    <button
                        onClick={() => this.editPost(post.id)}
                      className="btn btn-info"
                    >
                      Update{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                        onClick={() => this.deletePost(post.id)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewPost(post.id)}
                      className="btn btn-info"
                    >
                      View{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
