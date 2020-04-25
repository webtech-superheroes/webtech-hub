import React, { Component } from 'react';

import List from '@material-ui/core/List';

import axios from 'axios'

import CourseCard from '../components/courses/CourseCard'


const API_BASE_URL = process.env.REACT_APP_API_BASEURL + '/api'

class Courses extends Component {
    constructor(props) {
      super(props) 
      this.state = {
        courses: []
      }
    }

    componentDidMount() {
      axios.get(API_BASE_URL + '/data/content.json').then((result) => {
        this.setState({courses: result.data})
      })
    }

    render() {
      return (
        <div>
        <h1>Courses</h1>

      {this.state.courses.map((course) => <CourseCard course={course}/>)}
        </div>
      )
    }
  }

export default Courses