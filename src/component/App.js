import React, { Component } from "react";
import firebaseApp from "../firebase";
import { connect } from "react-redux";
import AddGoal from "./AddGoal";
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
        <h3 className="mt-3">Goal</h3>
        <AddGoal />
        <div>Goal list</div>
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
