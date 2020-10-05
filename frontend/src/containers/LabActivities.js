import React, { Component } from 'react';

import LabActivityCard from '../components/activities/LabActivityCard'


const API_BASE_URL = process.env.REACT_APP_API_BASEURL

class LabActivities extends Component {
    constructor(props) {
      super(props) 
      this.state = {
        activities: []
      }
    }

    componentDidMount() {
      fetch(API_BASE_URL + '/data/lab_activities.json').then((response) => response.json()).then((result) => {
        this.setState({activities: result})
      })
    }

    render() {
      return (
        <div>
        <h1>Lab Activities</h1>
            {this.state.activities.map((activity) => <LabActivityCard activity={activity}/>)}
        </div>
      )
    }
  }

export default LabActivities