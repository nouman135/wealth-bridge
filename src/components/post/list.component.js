import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import PostService from "../../services/post.service";
import "./list.css";
import { Link } from "react-router-dom";



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
    // this.props.history.push(`/view-post/${id}`);
    <Navigate to={`/view-post/${id}`} />;
  }

  editPost(id) {
    // this.props.history.push(`/add-post/${id}`);
    <Navigate to={`/add-post/${id}`} />;
  }

  componentDidMount() {
    PostService.getPosts().then((res) => {
      this.setState({ posts: res.data.posts });
    });
  }

  addPost() {
    // this.props.history.push('/add-post/_add');
    <Navigate to={`/add-post/_add`} />;
  }

  getISODate(getISO) {
    // return date.toLocaleDateString('en-GB');
    const date = new Date(getISO);
    const timestampWithOffset = date.getTime();
    const dateWithOffset = new Date(timestampWithOffset);

    return dateWithOffset;
  }
  

  render() {
    return (
      <div>
        {/* <h2 className="text-center">Post List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addPost}>
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
          </table> */}
        <div>
          <header>
            <h2>Dashboard</h2>
            <div className="header-buttons">
              <button>Add RM</button>
             <Link to='/add-post/_add'>
             <button>Add New Idea</button>
             </Link> 
            </div>
          </header>
          <main>
            {this.state.posts.map((post) => (
              <ul className="idea-list" key={post.id}>
                <li className="idea-item">
                  <div className="idea-title">Title: {post.title}</div>
                  <div className="idea-category">Category: {post.category}</div>
                  <div className="idea-description">Description: {post.description}</div>
                  <div className="idea-date">Created At: {this.getISODate(post.created_at).toString()}</div>
                  <div className="idea-date">Updated At: {this.getISODate(post.updated_at).toString()}</div>
                  <div className="idea-actions">
                   <Link to={`/add-post/${post.id}`} > <button onClick={() => this.editPost(post.id)}>
                      Update{" "}
                    </button>  </Link> 
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
      </div>
    );
  }
}
