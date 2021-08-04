import React, { Component } from "react";
import { firebaseApp } from "../firebase";
import { connect } from "react-redux";
import AddGoal from "./AddGoal";
import GoalList from "./GoalList";
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
        <h3>Goal coach</h3>
        <AddGoal />
        <GoalList />
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
  console.log("state from app ", state);
  return {};
}

export default connect(mapStateToProps, null)(App);
