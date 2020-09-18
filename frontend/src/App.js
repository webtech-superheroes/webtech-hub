import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Index from './containers/Index'
import Teams from './containers/Teams'
import Students from './containers/Students'
import Workspace from './containers/Workspace'
import About from './containers/About'
import Account from './containers/Account'
import Login from './containers/Login'

import Header from './components/Header'
import Courses from './containers/Courses';



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
              <Route path="/learn/" component={Courses} />
              <Route path="/about/" component={About} />
              <Route path="/login/" component={Login} />
              <Route path="/account/" component={Account} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
