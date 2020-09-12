import React, { Component } from 'react';

import Button from '@material-ui/core/Button';


import GitHubIcon from '@material-ui/icons/GitHub';
class Index extends Component {
    render() {
      return (
        <div>
          <h1 style={{textAlign: 'center'}}>Welcome to WebTech Superheroes Hub</h1> 
          <div>
              <p>Before you take a peek in the platform, please see a quick guide on how to make the most out of it.</p>
              <p>First thing first, make sure your profile has your Git profile link.</p>
              <p> If you don’t have an account yet on Git Hub, click <a href="https://github.com/join" target="_blank">here</a>.</p>
          </div>
          <div style={{textAlign: 'center'}}>
            <Button
                href="/workspace"
                variant="contained" color="primary"
              >Open Workspace</Button>
          </div>
        </div>)
    }
}

export default Index
