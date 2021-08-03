import React, { Component } from "react";
import { firebaseApp } from "../firebase";
import { Link } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  handleSignUp() {
    console.log("this ", this.state);
    const { email, password } = this.state;
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("user succesfully sign up as ", user);
      })
      .catch((error) => {
        console.log("error bos", error.message);
        this.setState({ error: error.message });
      });
  }
  render() {
    return (
      <div className="form- ">
        <h3>SignUp</h3>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="email"
            placeholder="email"
            onChange={(event) => this.setState({ email: event.target.value })}
          />
          <input
            className="form-control"
            type="password"
            name="email"
            placeholder="password"
            onChange={(event) =>
              this.setState({ password: event.target.value })
            }
          />
          <button
            className="btn btn-primary"
            onClick={() => this.handleSignUp()}
          >
            Sign up
          </button>
        </div>
        <div>{this.state.error}</div>
        <div>
          <Link to="/SignIn">To Sign in</Link>
        </div>
      </div>
    );
  }
}

export default SignUp;
