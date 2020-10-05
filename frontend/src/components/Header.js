import React from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    flexGrow: 3,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  }
});

class Header extends React.Component {
  constructor(props) {
    super(props)

    let pages = ['/', '/teams', '/students', '/learn', '/lab-activities', '/assignments', '/account'];
    let labels = ['Home', 'Teams', 'Students', 'Courses', 'Lab activities', 'Assignments', 'Account']

    let pathname = this.props.location.pathname
    pathname = pathname[pathname.length - 1] !== '/' ? pathname : pathname.substr(0, pathname.length - 1)

    let index = pages.indexOf(pathname)

    this.state = {
        value: index,
        pages: pages,
        labels: labels,
        drawer: false
    };
  }

  toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    

    this.setState({drawer: open });
  };
  

  handleChange = (value) => {
    this.setState({ value });

    
    this.props.history.push(this.state.pages[value])
    this.toggleDrawer(false)
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} >
        <AppBar position="static">
          <Drawer open={this.state['drawer']} onClose={this.toggleDrawer(false)}>
            <div
            className={classes.list} onClick={this.toggleDrawer(false)}>
              <List>
                {this.state.labels.map((text, index) => (
                <ListItem button key={text} onClick={() => {this.handleChange(index)}}>
                  <ListItemText primary={text} />
                </ListItem>
                ))}
              </List>
            </div>
          </Drawer>  
          <Toolbar>
            <IconButton edge="start" onClick={this.toggleDrawer(true)} className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              WebTech Hub
            </Typography>
            <Button color="inherit" onClick={() => this.props.history.push('/account')}>Account</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Header));
