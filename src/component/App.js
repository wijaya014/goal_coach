import React, { Component } from "react";
import firebaseApp from "../firebase";
import { connect } from "react-redux";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  signOut() {
    firebaseApp.auth().signOut();
  }
  render() {
    return (
      <div>
        App
        <div>
          <button className="btn btn-danger" onClick={() => this.signOut()}>
            Sign out
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state ", state);
  return {};
}

export default connect(mapStateToProps, null)(App);
