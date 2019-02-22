import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Login from './login'

class Auth extends Component {
    state = {
        open: false,
        selectedValue: '',
    };

    handleClickOpen = () => {
        this.setState({
        open: true,
        });
    };

    handleClose = value => {
        this.setState({ selectedValue: value, open: false });
    };

  render() {
    return (
        <div>
            <Button variant="contained" onClick={this.handleClickOpen}>
                შესვლა
            </Button>
            <Login
            selectedValue={this.state.selectedValue}
            open={this.state.open}
            onClose={this.handleClose}
            />
        </div>
    
    )
  }
}

export default Auth;
