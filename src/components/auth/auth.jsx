import React, { Component } from 'react'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Login from './login';
import {openDialog,closeDialog} from '../../actions/dialogs';

class Auth extends Component {



  render() {
    console.log(this.props);
      //debugger;
    return (
        <div>
            <Button variant="contained" onClick={this.props.openDialog}>
                შესვლა
            </Button>
            <Login
            open={this.props.dialog.dialogVisible}
            onClose={this.props.closeDialog}
            />
        </div>
    
    )
  }
}

const mapDispatchToProps =  dispatch => ({
    openDialog: () => dispatch(openDialog()),
    closeDialog: () => dispatch(closeDialog())
})

function mapStateToProps(state) {
    // console.log(state);
    return state;
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth);
