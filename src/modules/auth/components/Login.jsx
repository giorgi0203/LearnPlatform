import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import { login } from "../";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  buttons: {
    textAlign: "end",
    marginTop: "10px"
  }
});

class Login extends Component {
  state = {
    form: {
      email: "",
      password: ""
    }
  };

  handleSubmit = e => {
    console.log(this.state);

    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };
  handleClose = () => {
    this.props.closeAuth();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} method="post">
        <TextField
          id="email"
          label="Email"
          name="email"
        //   type="email"
          className={this.props.classes.textField}
          value={this.state.form.email}
          onChange={this.handleChange}
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          name="password"
          type="password"
          className={this.props.classes.textField}
          value={this.state.form.password}
          onChange={this.handleChange}
          margin="normal"
        />
        <div className={this.props.classes.buttons}>
          {/* <Button color="primary" onClick={this.handleClose}>Cancel</Button> */}
          <Button type="submit" color="primary">
            Login
          </Button>
        </div>
      </form>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  //   closeAuth: () => dispatch(closeAuth())
  // closeDialog: () => dispatch(closeDialog()),
  login: (payload) => dispatch(login(payload))
});

const mapStateToProps = state => ({ isAuthOpen: state.ui.isAuthDialogOpen });

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(Login));
