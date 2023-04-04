import React, { Component } from "react";
import withRouter from "../../helper/HOC";
import AuthService from "../../services/auth.service";
import { convertISODateTime } from "../../helper/date";

export default withRouter(
  class List extends Component {
    constructor(props) {
      super(props);

      this.state = {
        users: [],
      };

      this.deletePost = this.deletePost.bind(this);

      this.navigate = this.props.navigate;
    }

    deletePost(id) {}

    componentDidMount() {
      AuthService.getUsers().then((res) => {
        const user = res.data.users.filter((user) => user.role === "MEMBER");

        this.setState({ users: user });
      });
    }

    showUsers() {
      return this.state.users.map((user) => (
        <div key={user.id} className="col-md-6 col-xs-8 col-12 my-2">
          <div className="card shadow-sm text-center h-100" key={user.id}>
            <div className="card-header">
              <figure>
                <blockquote className="blockquote">
                  <p>{user.full_name}</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  {user.email}
                </figcaption>
              </figure>
            </div>
            <div className="card-body">
              <p className="card-text">{user.phone}</p>
            </div>
            <small className="text-muted my-2">
              {convertISODateTime(user.updated_at)}
            </small>
            <div className="card-footer">
              <button
                className="btn btn-sm"
                // onClick={() => this.editPost(user.id)}
              >
                Update
              </button>
              <button
                className="btn btn-danger btn-sm"
                // onClick={() => this.deletePost(user.id)}
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
          <main className="row">{this.showUsers()}</main>
        </>
      );
    }
  }
);
