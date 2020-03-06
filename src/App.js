import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Home from './component/Home'

class App extends Component {

  render() {
    return (
        <Router>
            <Route exact path="/" component = {Home} />
        </Router>
    )
  }
}

export default App;
