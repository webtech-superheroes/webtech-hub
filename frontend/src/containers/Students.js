import React, { Component } from 'react';
import List from '@material-ui/core/List';

import axios from 'axios'

import Student from '../components/students/Student'

const API_BASE_URL = process.env.REACT_APP_API_BASEURL + '/api'
console.log(process.env)
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
        <h1>Studenți</h1>
        <List>
          {this.state.students.map((student) => <Student key={student.id} profile={student} />)}
        </List>
        </div>
      )
    }
  }

export default Students