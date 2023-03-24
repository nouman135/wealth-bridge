import React, { Component } from "react";
import PostService from "../../services/post.service";


export default class View extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      post: {},
    };
    console.log(this.props)
  }

  componentDidMount() {
    
    PostService.getById(this.state.id).then((res) => {
      this.setState({ post: res.data.post });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Post Details</h3>
          <div className="card-body">
            <div className="row">
              <label> Title: </label>
              <div> {this.state.post.title}</div>
            </div>
            <div className="row">
              <label> Description: </label>
              <div> {this.state.post.description}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
