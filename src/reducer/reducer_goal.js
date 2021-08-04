import { SET_GOALS } from "../constant";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  switch (action.type) {
    case SET_GOALS:
      const { goals } = action;
      return goals;
    default:
      return state;
  }
};
