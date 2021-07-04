/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from './Home.js';
import Dashboard from './Dashboard.js';
import Pool from './Pool.js';
import PoolAave from './Pages/PoolAave';
import PoolCompound from './Pages/PoolCompound';
import PoolAaveCompound from './Pages/PoolAaveCompound';
import Create from './Pages/Create';

const hist = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={hist}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/pool" component={Pool} />
          <Route exact path="/aave" component={PoolAave} />
          <Route exact path="/compound" component={PoolCompound} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/axc" component={PoolAaveCompound} />
          <Route exact path="/" component={Home} />
          <Route to="*" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
