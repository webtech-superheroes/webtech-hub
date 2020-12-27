import React, { Component } from 'react';

import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import GitHubIcon from '@material-ui/icons/GitHub';

class Team extends Component {
    render() {
      let team = this.props.team;
      
      return (
        <Box borderBottom={1}>
          <ListItem >
              <ListItemText>{team.name}</ListItemText>
              <Button
                href={team.projectRepo}
                target="_blank"
                variant="contained" color="primary"
                startIcon={<GitHubIcon />}
              >Open Repo</Button>
        </ListItem>
      </Box>
        
      )  
    }
  }

  export default Team