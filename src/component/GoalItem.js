import React, { Component } from "react";
class GoalItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { email, title } = this.props.goals;
    return (
      <div style={{ margin: "5px" }}>
        <strong>{title}</strong>{" "}
        <span>
          submitted by <em>{email}</em>
        </span>
      </div>
    );
  }
}

export default GoalItem;
