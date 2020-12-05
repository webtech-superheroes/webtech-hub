import React, { Component } from 'react';

import List from '@material-ui/core/List';

import axios from 'axios'

import Team from '../components/teams/Team'



const API_BASE_URL = process.env.REACT_APP_API_BASEURL

class Teams extends Component {
    constructor(props) {
      super(props) 
      this.state = {
        teams: []
      }
    }

    componentDidMount() {
      axios.get(API_BASE_URL + '/teams').then((result) => {
        this.setState({teams: result.data.results})
      })
    }

    render() {
      return (
        <div>
        <h1>Teams 2020/2021</h1>
          <List>	
            {this.state.teams.map((team) => <Team team={team}/>)}	
          </List>
        </div>
      )
    }
  }

export default Teams