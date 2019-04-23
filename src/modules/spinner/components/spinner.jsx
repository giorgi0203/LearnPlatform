import React, { Component } from 'react';
import {connect} from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
});

class Spinner extends Component {
  render(){
    const { classes } = this.props;
    return (
      <div>
        {this.props.isLoading?(<CircularProgress className={classes.progress} />):('')} 
      </div>
    );
};
}


const mapStateToProps = state => {
    return {isLoading: state.ui.spinner.loading};
}

export default connect(mapStateToProps)(withStyles(styles)(Spinner));