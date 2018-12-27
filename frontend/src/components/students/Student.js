import React, { Component } from 'react';

import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

class Student extends Component {
    render() {
      let profile = this.props.profile;
      
      return (
        <ListItem>
            <ListItemAvatar>
                {
                profile.profilePicture 
                    ? <Avatar src={profile.profilePicture} />
                    : <Avatar src="nopic.png" />
                }
            </ListItemAvatar>
            <ListItemText>{profile.name}</ListItemText>
            <br/>
            <Button
              href={profile.githubProfile}
              target="_blank"
              label="GitHub Link"
              secondary={true}
            >Github</Button>
      </ListItem>
      )  
    }
  }

  export default Student