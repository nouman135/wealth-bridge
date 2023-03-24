import React, { Component } from "react";
import PostService from "../../services/post.service";

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    PostService.getPosts().then((res) => {
      this.setState({ posts: res.data.posts });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Post List</h2>
        <div className="row">
          <button className="btn btn-primary"
        //   onClick={this.addEmployee}
          >
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
                {/* <th> Employee Email Id</th> */}
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((post) => (
                <tr key={post.id}>
                  <td> {post.title} </td>
                  <td> {post.description}</td>
                  {/* <td> {post.emailId}</td> */}
                  <td>
                    <button
                    //   onClick={() => this.editEmployee(employee.id)}
                      className="btn btn-info"
                    >
                      Update{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                    //   onClick={() => this.deleteEmployee(employee.id)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                    //   onClick={() => this.viewEmployee(employee.id)}
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