import React, { Component } from 'react';
import { Provider } from 'react-redux'
import logo from './logo.svg';
import Navbar from './components/navbar';
import Spinner from './components/spinners/spinner';
import PostsList from './components/posts/postsList';
import Auth from './components/auth/auth';
import store from './store'
class App extends Component {
  render() {
    console.log("app",store.getState());
    
    return (
      <Provider store={store}>
      
        <Spinner />
        
        <Navbar />

        {store.getState().loading.loading?"":<PostsList />}
        
      </Provider> 
    );
  }
}

export default App;
