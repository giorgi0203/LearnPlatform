import React, { Component } from 'react';
import { Provider } from 'react-redux'
import logo from './logo.svg';
import Navbar from './components/navbar';
import Spinner from './components/spinners/spinner';
import store from './store'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Spinner />
        <Navbar />
        {/* <App /> */}
      </Provider> 
    );
  }
}

export default App;
