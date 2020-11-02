import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,

} from "react-router-dom";
import './App.css'
import { paths } from './paths/paths'
import { Button, Avatar } from '@material-ui/core';
import { connect } from 'react-redux'
import HomeIcon from '@material-ui/icons/Home';
import { logOut } from './redux/actions'
import { usersMe } from './redux/actions'


class App extends React.Component{

  componentDidMount(){
    this.props.usersMe();
  }
  render(){
    this.props.auth.isAuthorized = localStorage.getItem('headers') ? true : this.props.auth.isAuthorized
    const logOutHandler = () => {
      this.props.logOut(); 
    }
    return (
      <Router>
        <div>
          <header className='navigation'>
            {this.props.auth.isAuthorized &&
              <>
                <div className='nav-items'>
                  <div>
                    <Link to='/'><HomeIcon /></Link>
                  </div>
                  {this.props.auth.isAuthorized && (<div className='log-out'>
                    <Link to='/profile'><Avatar></Avatar></Link>
                    <Button onClick={logOutHandler} color='secondary'>Log Out</Button>
                  </div>)}
                </div>
              </>
            }
          </header>
          <div className='main'>
            <Switch>
              {this.props.auth.isAuthorized ? (paths.map(path => {
                return <Route
                  path={path.path}
                  component={path.component}
                  key={path.id}>
                </Route>
              })) : (
                  <><Redirect
                    from='/'
                    to={paths[0].path}
                  /><Route
                    path={paths[0].path}
                    component={paths[0].component}>
                    </Route>
                    <Route
                      path={paths[1].path}
                      component={paths[1].component}>
                    </Route>
                  </>
                )}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
  }
  
const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}
const mapDispatchToProps = {
  logOut, usersMe
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
