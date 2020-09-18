import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

const API_BASE_URL = process.env.REACT_APP_API_BASEURL

class Account extends Component {

    constructor(props) {
        super(props) 
        this.state = {
          isLoaded: false,
          account: null
        }
      }


    async componentDidMount() {
        let response = await fetch(API_BASE_URL + '/auth/users/me')
        if(response.status == 200) {
            let json = await response.json()
            this.setState({account: json, isLoaded: true})
        } else {
            this.props.history.push('/login')
        }
    }

    render() {
        if (!this.state.isLoaded) {
            return <div>Loading...</div>;
        } else {
        return(
            <div>
                <h1>Account</h1>

                ID: {this.state.account.id} <br/>
                Name: {this.state.account.username}

                <div>
                <Button
                    href={'/api/auth/logout'}
                    label="Logout"
                    variant="contained" color="primary"
                >Logout</Button>
                </div>
            </div>
        )
        }
    }
}

export default Account