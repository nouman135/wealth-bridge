import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import PostService from "../../services/post.service";
import './list.css'
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
<head>
	<title>Dashboard</title>
</head>
	<header>
		<h2>Dashboard</h2>
		<div className="header-buttons">
			<button>Add RM</button>
			<button>Add New Idea</button>
		</div>
	</header>
	<main>
  {this.state.posts.map((post) => (
		<ul className="idea-list" key={post.id}>
			<li className="idea-item">
				<div className="idea-title">{post.title}</div>
				<div className="idea-category">Category 1</div>
				<div className="idea-date">Uploaded on: 01/01/2022</div>
				<div className="idea-description">{post.description}</div>
				<div className="idea-actions">
					<button onClick={() => this.editPost(post.id)}>Update {" "}</button>
					<button onClick={() => this.deletePost(post.id)}>Delete{" "}</button>
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
