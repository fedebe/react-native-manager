import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCo2Tj8Zh7vz2zTU0oXyRs2CgilP2Pr-VA',
      authDomain: 'manager-ffc93.firebaseapp.com',
      databaseURL: 'https://manager-ffc93.firebaseio.com',
      projectId: 'manager-ffc93',
      storageBucket: 'manager-ffc93.appspot.com',
      messagingSenderId: '812154916114'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
