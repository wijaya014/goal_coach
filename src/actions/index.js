import { SET_GOALS, SIGNED_IN } from "../constant";

export function logUser(email) {
  const action = {
    type: SIGNED_IN,
    email,
  };
  return action;
}

export function setGoal(goals) {
  const action = {
    type: SET_GOALS,
    goals,
  };
  return action;
}
