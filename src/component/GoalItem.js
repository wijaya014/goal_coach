import React, { Component } from "react";
import { firebaseApp } from "../firebase";
import { connect } from "react-redux";
class GoalItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleCompleted() {
    const { email } = this.props.user;
    const { title } = this.props.goals;
    firebaseApp.db.collection("completed_goal").add({ title, email });
  }
  render() {
    const { email, title } = this.props.goals;
    return (
      <div style={{ margin: "5px" }}>
        <strong>{title}</strong>{" "}
        <span>
          submitted by <em>{email}</em>
        </span>
        <button
          className="btn btn-sm btn-primary ml-2"
          onClick={() => this.handleCompleted()}
        >
          completed
        </button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { user } = state;
  return {
    user,
  };
}

export default connect(mapStateToProps, null)(GoalItem);
