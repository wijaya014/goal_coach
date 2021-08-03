import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebaseApp from "../firebase";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  handleSignIn() {
    console.log("this ", this.state);
    const { email, password } = this.state;
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => console.log("login as ", this.state.email))
      .catch((error) => this.setState({ error: error.message }));
  }
  handleSignOut() {
    firebaseApp
      .auth()
      .signOut()
      .then((user) => console.log("berhasil logout ", user))
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="form- ">
        <h3>SignIn</h3>
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
            onClick={() => this.handleSignIn()}
          >
            Sign In
          </button>
        </div>
        <div>
          <Link to="/signup">Sign up dulu boss</Link>
        </div>
        <div className="mt-3 ">{this.state.error}</div>
      </div>
    );
  }
}

export default SignIn;
