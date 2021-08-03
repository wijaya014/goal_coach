import React, { Component } from "react";
import { goalRef } from "../firebase";
class AddGoal extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }
  handleClick() {
    console.log(this.state);
    goalRef.push({ email: "agus@yahoo.com", title: this.state.title });
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

export default AddGoal;