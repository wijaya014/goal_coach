import ReactDOM from "react-dom";
import { Router, Route } from "react-router";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { createBrowserHistory } from "history";
import { logUser } from "./actions";
import reducers from "./reducer";
import App from "./component/App";
import SignIn from "./component/SignIn";
import SignUp from "./component/SignUp";
import { firebaseApp } from "./firebase";

const history = createBrowserHistory();
const store = createStore(reducers);

firebaseApp.auth.onAuthStateChanged((user) => {
  if (user) {
    const { email } = user;
    //console.log("user has sign in as " + user);
    console.log("store get state is ", store.getState());
    store.dispatch(logUser(email));
    history.push("/app");
  } else {
    //console.log("user never sign up");
    history.replace("/signin");
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router path={"/"} history={history}>
      <Route path={"/app"} component={App} />
      <Route path={"/signin"} component={SignIn} />
      <Route path={"/signup"} component={SignUp} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
