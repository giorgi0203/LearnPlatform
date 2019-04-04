import React, { Component } from 'react'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Login from './login';
import {openDialog,closeDialog} from '../../actions/ui';

class Auth extends Component {
  render() {

    
    return (
        <div>
            <Button variant="contained" onClick={this.props.openDialog}>
                შესვლა
            </Button>
            <Login
              open={this.props.ui.dialogVisible}
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
    // login: () => dispatch(login())
})

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth);
