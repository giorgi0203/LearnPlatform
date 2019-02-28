import React, { Component } from 'react'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Login from './login';
import Spinner from '../spinners/spinner';
import {openDialog,closeDialog} from '../../actions/dialogs';
import {startLoading,stopLoading} from '../../actions/api';
import spinner from '../spinners/spinner';

class Auth extends Component {
  render() {

    
    return (
        <div>
          
            <Button variant="contained" onClick={this.props.openDialog}>
                შესვლა
            </Button>
            <Login
              open={this.props.dialog.dialogVisible}
              onClose={this.props.closeDialog}
              startLoading={this.props.startLoading}
            />
            {this.props.api.loading?(<Spinner />):('')}
            {/* registracia */}
        </div>
    )
  }
}

const mapDispatchToProps =  dispatch => ({
    openDialog: () => dispatch(openDialog()),
    closeDialog: () => dispatch(closeDialog()),
    startLoading: () => dispatch(startLoading())
})

function mapStateToProps(state) {
  console.log(state);
    return state;
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth);
