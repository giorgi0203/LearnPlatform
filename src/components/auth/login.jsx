import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    // width: theme.spacing.unit * 40,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
  formInputs: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    display: 'block',
  },
  button: {
    margin: theme.spacing.unit,
  },
});
class Login extends Component {
  state = {
    open: this.props.open,
  };

  render() {
    const { classes } = this.props;
    
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.open}
          onClose={this.props.onClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              ავტორიზაცია
            </Typography>
            <TextField
              id="standard-userName-input"
              label="User Name"
              className={classes.formInputs}
              type="text"
              autoComplete="current-password"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="standard-password-input"
              label="Password"
              className={classes.formInputs}
              type="password"
              autoComplete="current-password"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" color="primary" onClick={this.props.login} className={classes.button}>
              ავტორიზაცია
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Login)
