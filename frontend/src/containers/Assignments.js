import React, { Component } from 'react';

import AssignmentsCard from '../components/assignments/AssignmentCard'


const API_BASE_URL = process.env.REACT_APP_API_BASEURL

class Assignments extends Component {
    constructor(props) {
      super(props) 
      this.state = {
        assignments: []
      }
    }

    componentDidMount() {
      fetch(API_BASE_URL + '/data/assignments.json').then((response) => response.json()).then((result) => {
        this.setState({assignments: result})
      })
    }

    render() {
      return (
        <div>
        <h1>Assignments</h1>
            {this.state.assignments.map((assignment) => <AssignmentsCard assignment={assignment}/>)}
        </div>
      )
    }
  }

export default Assignments