import React, { Component } from 'react'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Login from './login';
import Spinner from '../spinners/spinner';
import {openDialog,closeDialog} from '../../actions/dialogs';
import {login,register} from '../../actions/auth';
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
              login={this.props.login}
            />
            {/* registracia */}
        </div>
    )
  }
}

const mapDispatchToProps =  dispatch => ({
    openDialog: () => dispatch(openDialog()),
    closeDialog: () => dispatch(closeDialog()),
    login: () => dispatch(login())
})

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth);
