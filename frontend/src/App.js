import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Index from './containers/Index'
import Teams from './containers/Teams'
import Students from './containers/Students'
import About from './containers/About'
import Login from './containers/Login'

import Header from './components/Header'



class App extends Component {
  render() {
    return (
      <div className="App" >
        <Router>
          <div>
            <Header />
            <div style={{padding:'10px'}}>
              <Route path="/" exact component={Index} />
              <Route path="/teams/" component={Teams} />
              <Route path="/students/" component={Students} />
              <Route path="/about/" component={About} />
              <Route path="/login/" component={Login} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
