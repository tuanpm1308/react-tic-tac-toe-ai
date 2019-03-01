import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import configureStore from './redux/configureStore';
import Game from './game/Game';

class App extends Component {
  render() {
    const store = configureStore();

    return (
      <Provider store={store}>
        <Game />
      </Provider>
    );
  }
}

export default App;
