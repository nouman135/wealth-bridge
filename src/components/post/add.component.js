import React, { Component } from "react";
import { Navigate, useParams } from "react-router-dom";
import PostService from "../../services/post.service";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

export default withParams(class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.params.id,
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
    if (!this.state.title || !this.state.description) {
      alert("Please Fill The Form Completly");
      return;  
    }
    let post = {
        title: this.state.title,
        description: this.state.description,
    };
    console.log("post => " + JSON.stringify(post));

    if (this.state.id === "_add") {
        PostService.createPost(post).then((res) => {
            // redirect to dashboard after successful post creation
            window.location.href = '/dashboard';
        });
    } else {
        PostService.updatePost(post, this.state.id).then((res) => {
            // redirect to dashboard after successful post update
            window.location.href = '/dashboard';
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
      return <h3 className="text-center">Update Idea</h3>;
    }
  }
  render() {
    return (
      <div>
        <br></br>
        {/* <div className="container">
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
        </div> */}
         <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-lg border-0 rounded-lg">
              <div className="card-header">
                {this.getTitle()}
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                      type="text"
                      placeholder="Enter a title"
                      id="title"
                      name="title"
                      className="form-control"
                      value={this.state.title}
                      onChange={this.changeTitleHandler}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select
                      className="form-select"
                      id="category"
                      name="category"
                      value={this.state.category}
                      onChange={this.changeCategoryHandler}
                    >
                      <option value="">Select a category</option>
                      <option value="bond">Bond</option>
                      <option value="equity">Equity</option>
                      <option value="realestate">Real Estate</option>
                      <option value="gold">Gold</option>
                      <option value="crypto">Crypto</option>
                      <option value="stocks">Stocks</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea required
                      placeholder="Enter a description"
                      id="description"
                      name="description"
                      className="form-control"
                      rows="5"
                      value={this.state.description}
                      onChange={this.changeDescriptionHandler}
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      type="submit"
                      className="btn btn-primary me-3"
                      onClick={this.saveOrUpdatePost}
                    >
                      Submit
                    </button>
                   <Link to='/dashboard'><button
                      type="button"
                      className="btn btn-secondary"
                      onClick={this.cancel.bind(this)}
                    >
                      Cancel
                    </button></Link> 
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
})
