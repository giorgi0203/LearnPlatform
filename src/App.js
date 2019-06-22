import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import { Navbar, List, FabMenu, Auth, Spinner } from "./modules";

import store from "./store";

const history = createHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Spinner />
          <Navbar />
          <Auth />
          <FabMenu />

          <Route path="/home" exact component={List} />

          {/*  <Navbar /> */}
          {/* {store.getState().ui.loading?"":<List />}

        <Form /> */}
        </Router>
      </Provider>
    );
  }
}

export default App;
