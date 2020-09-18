import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

class Login extends Component {
    render() {
      return (
      <div>  
        <h1>Login</h1>
        <Button
              href={'/api/auth/google'}
              label="Login with google"
              variant="contained" color="primary"
            >Login with Google</Button> 
        
        <Button
            href={'/api/auth/github'}
            label="Login with google"
            variant="contained" color="primary"
          >Login with Github</Button>
      </div> 
      )
    }
}

export default Login