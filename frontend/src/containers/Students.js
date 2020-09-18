import React, { Component } from 'react';
import List from '@material-ui/core/List';

import axios from 'axios'

import ProfileCard from '../components/ProfileCard'

const API_BASE_URL = process.env.REACT_APP_API_BASEURL

class Students extends Component {
    constructor(props) {
      super(props) 
      this.state = {
        students: []
      }
    }

    componentDidMount() {
      axios.get(API_BASE_URL + '/students').then((result) => {
        this.setState({students: result.data.results})
      })
    }

    render() {
      return (
        <div>
        <h1>Students</h1>
        <List>
          {this.state.students.map((student) => <ProfileCard key={student.id} profile={student} />)}
        </List>
        </div>
      )
    }
  }

export default Students