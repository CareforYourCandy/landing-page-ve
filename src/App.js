import React from "react";
import Users from "./pages/Users";
import Landing from "./pages/LandingPage";
import CurrentUser from "./pages/CurrentUser";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/users/:id">
              <CurrentUser />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
