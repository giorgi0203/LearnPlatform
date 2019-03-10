import React, { Component } from 'react';
import { Provider } from 'react-redux'
import logo from './logo.svg';
import Navbar from './components/navbar';
import Spinner from './components/spinners/spinner';
import PostsList from './components/posts/postsList';
import AddForm from './components/posts/addForm';
import store from './store'

class App extends Component {
  render() {
    
    return (
      <Provider store={store}>
      
        <Spinner />
        
        <Navbar />

        

        {store.getState().ui.loading?"":<PostsList />}

        <AddForm />
        
      </Provider> 
    );
  }
}

export default App;
