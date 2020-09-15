import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  
  return (
    <Router>
      <header className='header'>
        <NavLink to='/login'> Login </NavLink>
        <NavLink to='/register'> Register </NavLink>
      </header>

        <div>
          <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
