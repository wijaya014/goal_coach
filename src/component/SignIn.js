import React, { Component } from "react";
import firebaseApp from "../firebase";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  signIn() {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword()
      .then((res) => {
        console.log("sukses sign in");
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }
  render() {
    return (
      <div className="form-inline">
        SignIn
        <div className="form-group">
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={(event) => this.setState({ email: this.state.email })}
          />
          <input
            type="text"
            name="password"
            className="form-control"
            onChange={(event) =>
              this.setState({ password: this.state.password })
            }
          />
        </div>
        <button className="primary">sign in</button>
      </div>
    );
  }
}

export default SignIn;
