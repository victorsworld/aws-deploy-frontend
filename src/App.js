import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
// import CreateTalk from './Components/CreateTalk/CreateTalk';

const Signin = React.lazy(() => import('./Components/Signin/Signin'));
const Home = React.lazy(() => import('./Components/Home/Home'));
const Signup = React.lazy(() => import('./Components/Signup/Signup'));
const CreateTalk = React.lazy(() => import('./Components/CreateTalk/CreateTalk'));
const SeeTalk = React.lazy(() => import('./Components/SeeTalk/SeeTalk'));

const UserProfile = React.lazy(() => import('./Components/UserProfile/UserProfile'));
const NotFound = React.lazy(() => import('./Components/NotFound/NotFound'));

export default class App extends Component {

  render() {
    return (
      <> 
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sign-up' component={Signup} />
          <Route exact path='/sign-in' component={Signin} />

          <PrivateRoute exact path='/create-talk' component={CreateTalk} />
          <PrivateRoute exact path='/see-talk/:id' component={SeeTalk} />
          <PrivateRoute exact path='/user-profile' component={UserProfile} />
          <Route path="" component={NotFound} />
        </Switch>
      </>
    )
  }
}
