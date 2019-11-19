import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

class Login extends Component {
    render() {
      return (
      <div>  
        <h1>Login</h1>
        <Button
              href={process.env.REACT_APP_API_BASEURL + '/auth/google'}
              target="_blank"
              label="Login with google"
              secondary={false}
            >Login with Google</Button>
      </div> 
      )
    }
}

export default Login