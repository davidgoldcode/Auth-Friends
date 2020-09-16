import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/FriendsList';
import FriendsList from './Components/FriendsList';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  
  return (
    <Router>
      <header className='header'>
        <NavLink className='navlink' to='/login'> Login </NavLink>
        <NavLink className='navlink' to='/friendslist'> Friends List </NavLink>
      </header>

        <div>
          <Switch>
            <Route path='/login' component={Login}/>
            <PrivateRoute exact path='/friendsList' component={FriendsList}/>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
