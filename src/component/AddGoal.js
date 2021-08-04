import React, { Component } from "react";
import { firebaseApp } from "../firebase";
import { connect } from "react-redux";

class AddGoal extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }
  handleClick() {
    console.log(this.state);
    const { title } = this.state;
    const { email } = this.props.user;
    firebaseApp.db.collection("goals").add({ email, title });
  }
  render() {
    return (
      <div className="form-inline mt-2">
        <input
          className="form-control"
          type="text"
          placeholder="add your goal"
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <button
          className="btn btn-primary mt-3 mb-2"
          onClick={() => this.handleClick()}
        >
          Add goal
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  console.log("add goal state is ", state);
  return { user };
}

export default connect(mapStateToProps, null)(AddGoal);
