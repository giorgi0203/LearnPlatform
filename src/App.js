import React, { Component } from "react";
import { Provider } from "react-redux";
import { Navbar, List } from "./modules";
// import Spinner from './components/spinners/spinner';
// import List from './components/posts/list';
// import Form from './components/posts/form';
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navbar />
        {/* <List/> */}
        {/* <Spinner />
        
        <Navbar /> */}
        {/* {store.getState().ui.loading?"":<List />}

        <Form /> */}
      </Provider>
    );
  }
}

export default App;
