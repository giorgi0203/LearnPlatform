import React, { Component } from 'react';
import { Provider } from 'react-redux'
import logo from './logo.svg';
import Navbar from './components/navbar';
import store from './store'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navbar />
        {/* <App /> */}
      </Provider> 
    );
  }
}

export default App;
