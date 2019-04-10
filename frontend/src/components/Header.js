import React from 'react';
import { withRouter } from "react-router-dom";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class Header extends React.Component {
  constructor(props) {
    super(props)

    let pages = ['/', '/teams', '/students', '/about', '/login'];
    let labels = ['Home', 'Echipe', 'Studenti', 'Despre', 'Login']

    let pathname = this.props.location.pathname
    pathname = pathname[pathname.length - 1] !== '/' ? pathname : pathname.substr(0, pathname.length - 1)

    let index = pages.indexOf(pathname)

    this.state = {
        value: index,
        pages: pages,
        labels: labels
    };
  }
  

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.history.push(this.state.pages[value])
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            {this.state.labels.map((element) => <Tab label={element}/>)}
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Header));
