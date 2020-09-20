import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import GitHubIcon from '@material-ui/icons/GitHub';

class Login extends Component {
    render() {
      return (
      <div>  
        <h1>Login</h1>
        <div style={{textAlign: 'center'}}>
          <Button
              href={'/api/auth/github'}
              label="Login with google"
              variant="contained" color="primary"
              startIcon={<GitHubIcon />}
            >Login with Github</Button>
        </div>   
      </div> 
      )
    }
}

export default Login