import React, { Component } from "react";
import { Provider } from "react-redux";
import { Navbar, List, FabMenu, Auth } from "./modules";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navbar />
        <Auth />
        <FabMenu />
        <List />
        {/* <Spinner />
        
        <Navbar /> */}
        {/* {store.getState().ui.loading?"":<List />}

        <Form /> */}
      </Provider>
    );
  }
}

export default App;
