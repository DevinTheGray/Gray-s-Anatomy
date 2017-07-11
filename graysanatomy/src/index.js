import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import LogIn from './components/LogIn'
import Play from './components/Play'
import Header from './components/Header'
import Home from './components/Home'



ReactDOM.render(
<Router>
  <div>
    <Route path='/' component={App} />
    <Route exact path= '/' component={Home} />
    <Route path='/play' component={Play} />
    <Route path='/login' component={LogIn} />
  </div>

</Router>,
  document.getElementById('root')
);
