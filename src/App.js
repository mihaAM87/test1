import React, { Component } from 'react'
//import 'react-select/dist/react-select.css'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import GameContent from './components/gameContent'
import './App.scss';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/source/source.json" component={GameContent} />
      </Switch>)
    return (
    <div className="App">
      {routes}
    </div>);
  }
}

export default withRouter(App);
