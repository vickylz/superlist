import './App.css';
import React from 'react';
import Products from './components/Products';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/superlist' component={Products}/>
    </Switch>
  );
};




export default App;