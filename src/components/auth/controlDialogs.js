import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Login from './login'

class ControlDialogs extends Component {
    state = {
        open: false,
        selectedValue: [],
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
            <Button variant="outlined"  onClick={this.handleClickOpen}>
                Login
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

export default ControlDialogs;
