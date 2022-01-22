import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import { Register } from './Pages/Register'


class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/register" component={Register}  />
            <Route path="/login" component={Login}  />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))