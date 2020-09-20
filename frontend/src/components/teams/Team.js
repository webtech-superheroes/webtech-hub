import React, { Component } from 'react';

import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';

import GitHubIcon from '@material-ui/icons/GitHub';

class Team extends Component {
    render() {
      let team = this.props.team;
      
      return (
        <ListItem>
            <ListItemText>{team.name}</ListItemText>
            <Button
              href={team.projectRepo}
              target="_blank"
              variant="contained" color="primary"
              startIcon={<GitHubIcon />}
            >Open Repo</Button>
            
      </ListItem>
      )  
    }
  }

  export default Team