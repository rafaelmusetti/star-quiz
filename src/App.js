import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from './components/home/Home';
import Game from './components/game/Game';
import store from './store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/game" component={Game} />
          </Switch>
        </ Router>
      </Provider>
    );
  }
}

export default App;
