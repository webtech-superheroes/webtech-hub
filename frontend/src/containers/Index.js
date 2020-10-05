import React, { Component } from 'react';

import Button from '@material-ui/core/Button';


import GitHubIcon from '@material-ui/icons/GitHub';
class Index extends Component {
    render() {
      return (
        <div>
          <h1 style={{textAlign: 'center'}}>Welcome to WebTech Superheroes Hub</h1> 
          <div>
              <p>First thing make sure your account has your GitHub profile linked.</p>
              <p>If you don’t have an account yet on GitHub, click <a href="https://github.com/join" target="_blank">here</a>.</p>
          </div>
          <div style={{textAlign: 'center'}}>

          </div>
        </div>)
    }
}

export default Index
