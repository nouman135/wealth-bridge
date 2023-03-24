import React, { Component } from "react";
import { Navigate } from "react-router";
import PostService from "../../services/post.service";

export default class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      title: "",
      description: "",
    };
    this.changeTitleHandler = this.changeTitleHandler.bind(this);
    this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
    this.saveOrUpdatePost = this.saveOrUpdatePost.bind(this);
  }

  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === "_add") {
      return;
    } else {
      PostService.getById(this.state.id).then((res) => {
        let post = res.data.post;
        this.setState({
          title: post.title,
          description: post.description,
        });
      });
    }
  }
  saveOrUpdatePost = (e) => {
    e.preventDefault();
    let post = {
      title: this.state.title,
      description: this.state.description,
    };
    console.log("post => " + JSON.stringify(post));

    // step 5
    if (this.state.id === "_add") {
      PostService.createPost(post).then((res) => {
        // this.props.history.push("/posts");
        <Navigate to="/posts" />
      });
    } else {
      PostService.updatePost(post, this.state.id).then((res) => {
        // this.props.history.push("/posts");
        <Navigate to="/posts" />
      });
    }
  };

  changeTitleHandler = (event) => {
    this.setState({ title: event.target.value });
  };

  changeDescriptionHandler = (event) => {
    this.setState({ description: event.target.value });
  };

  cancel() {
    // this.props.history.push("/posts");
    <Navigate to="/posts" />
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Post</h3>;
    } else {
      return <h3 className="text-center">Update Post</h3>;
    }
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Title: </label>
                    <input
                      placeholder="Title"
                      name="title"
                      className="form-control"
                      value={this.state.title}
                      onChange={this.changeTitleHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Description: </label>
                    <input
                      placeholder="Description"
                      name="description"
                      className="form-control"
                      value={this.state.description}
                      onChange={this.changeDescriptionHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdatePost}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
