import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,

} from "react-router-dom";
import './App.css'
import {paths} from './paths/paths'
import {Button,Avatar} from '@material-ui/core';
import {connect} from 'react-redux'

const App =({auth})=> {

  return (
    <Router>
    <div>
      <header className='navigation'>
      {auth.isAuthorized && 
          <>
           <div className='nav-items'>
            <Link to='/'>Home</Link>
            <Link to='/auth'>Sign In</Link>
            <Link to='/profile'>Profile</Link>
            </div>
            <div className='log-out'>
            <Avatar></Avatar>
            <Button color='secondary'>Log Out</Button>
            </div>
            </>
            }
      </header>
      <div className='main'>
        <Switch>
          {/* {auth.isAuthorized && paths.map(path=>{
            return <Route path={path.path} component={path.component} key={path.id}></Route>
          })} */}
          {auth.isAuthorized ? (paths.map(path=>{
            return <Route path={path.path} component={path.component} key={path.id}></Route> })) : (
               <><Redirect from='/' to={paths[0].path} /><Route path={paths[0].path} component={paths[0].component}></Route>
               <Route path={paths[1].path} component={paths[1].component}></Route>
               </>
            )}
        </Switch>
      </div>
    </div>
    </Router>
  );
}
const mapStateToProps = state => {
  return{
    auth: state.auth
  } 
}

export default connect(mapStateToProps,null)(App);
