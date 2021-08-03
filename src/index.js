import ReactDOM from "react-dom";
import { Router, Route } from "react-router";

import { createBrowserHistory } from "history";
import App from "./component/App";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import firebaseApp from "./firebase";

const history = createBrowserHistory();

// firebaseApp.auth().onAuthStateChanged((user) => {
//   if (user) {
//     console.log("user has sign in as " + user);
//   } else {
//     console.log("user never sign up");
//   }
// });

ReactDOM.render(
  <Router path={"/"} history={history}>
    <Route path={"/app"} component={App} />
    <Route path={"/signin"} component={SignIn} />
    <Route path={"/signup"} component={SignUp} />
  </Router>,
  document.getElementById("root")
);
