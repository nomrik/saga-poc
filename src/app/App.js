/* The app's entry point, including ReactRouter for client-side routing */

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom'

import Home from './home/Home';
import About from './about/About';

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <Route exact path="/" render={() => <Redirect to="/home" />}/>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About}/>
    </div>
  </Router>
)
export default App