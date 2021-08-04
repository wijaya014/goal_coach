import React, { Component } from "react";
import { firebaseApp } from "../firebase";
import { setGoal } from "../actions";
import { connect } from "react-redux";
import GoalItem from "./GoalItem";

class GoalList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    firebaseApp.db
      .collection("goals")
      .get()
      .then((snapshot) => {
        let goals = [];
        snapshot.docs.forEach((doc) => goals.push(doc.data()));
        console.log("tanpa destructive ", goals);
        this.props.setGoal(goals);
      });
  }

  render() {
    console.log("this.props.goals adalah ", this.props.goals);
    return (
      <div>
        {this.props.goals.map((goal, index) => {
          return <GoalItem index={index} goals={goal} />;
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { goals } = state;
  return {
    goals,
  };
}

export default connect(mapStateToProps, { setGoal })(GoalList);
