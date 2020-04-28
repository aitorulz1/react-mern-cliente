import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/auth/Login'
import NuevaCuenta from './components/auth/NuevaCuenta'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/nueva-cuenta' component={NuevaCuenta} />
      </Switch>
    </Router>
  );
}

export default App;
