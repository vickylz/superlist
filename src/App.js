import './App.css';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Products from './components/Products';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import { Router } from '@material-ui/icons';
function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/superlist' component={Products}/>
    </Switch>
  );
};




export default App;