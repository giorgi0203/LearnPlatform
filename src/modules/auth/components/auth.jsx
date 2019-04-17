import React, { Component } from 'react'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
// import Login from './login';
// import {openDialog,closeDialog} from '../../actions/ui';

class Auth extends Component {
  render() {

    //onClick={this.props.openDialog}
    return (
        <div>
            <Button variant="contained" >
                შესვლა
            </Button>
        </div>
    )
  }
}

const mapDispatchToProps =  dispatch => ({
    // openDialog: () => dispatch(openDialog()),
    // closeDialog: () => dispatch(closeDialog()),
    // login: () => dispatch(login())
})

function mapStateToProps(state) {
    return state.global;
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth);
