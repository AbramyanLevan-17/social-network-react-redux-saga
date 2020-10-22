import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import {paths} from './paths/paths'
import {Button,Avatar} from '@material-ui/core';

function App() {
  
  return (
    <Router>
    <div>
      <header className='navigation'>
            <div className='nav-items'>
            <Link to='/'>Home</Link>
            <Link to='/auth'>Sign In</Link>
            <Link to='/profile'>Profile</Link>
            </div>
            <div className='log-out'>
            <Avatar></Avatar>
            <Button color='secondary'>Log Out</Button>
            </div>
      </header>
      <div className='main'>
        <Switch>
          {paths.map(path=>{
            return <Route path={path.path} component={path.component} key={path.id}></Route>
          })}
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
