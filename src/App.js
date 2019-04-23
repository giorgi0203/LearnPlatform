import React, { Component } from "react";
import { Provider } from "react-redux";
import { Navbar, List, FabMenu, Auth, Spinner } from "./modules";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Spinner />
        <Navbar />
        <Auth />
        <FabMenu />
        <List />
        

        {/*  <Navbar /> */}
        {/* {store.getState().ui.loading?"":<List />}

        <Form /> */}
      </Provider>
    );
  }
}

export default App;
