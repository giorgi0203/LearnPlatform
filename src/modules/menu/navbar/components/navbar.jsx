import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//26356c
const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    // flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state={
      isOpen:false
    }
  }
  toggleDrawer = (isOpen) => () => {
    console.log('state',this.state);
    
    this.setState({
      isOpen: isOpen,
    });
  };
  render() {
    
    const { classes } = this.props;
    return (
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} onClick={this.toggleDrawer(!this.state.isOpen)} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6"  color="inherit" className={classes.grow}>
              მენიუ
            </Typography>
          </Toolbar>
        </AppBar>
        

        {/* <LeftDrawer toggleDrawer={this.toggleDrawer} isOpen={this.state.isOpen}/> */}
      </div>
    )
  }
}


export default withStyles(styles)(Navbar);