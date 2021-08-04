import { combineReducers } from "redux";

import user from "./reducer_user";
import goals from "./reducer_goal";

export default combineReducers({
  user,
  goals,
});
