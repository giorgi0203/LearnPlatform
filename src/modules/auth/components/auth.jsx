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
import { withStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Login from "./Login";
import { closeAuth } from "../../../modules";

function PaperComponent(props) {
  return (
    <Draggable>
      <Paper {...props} />
    </Draggable>
  );
}

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
});

class Auth extends Component {
  state = {
    form:{
      email:"",
      password:""
    }
  };
  handleClose = () => {
    console.log(this.props);

    this.props.closeAuth();
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.props.isAuthOpen}
          onClose={this.handleClose}
          // PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle id="draggable-dialog-title">Login</DialogTitle>
          <DialogContent>
            <Login />
          </DialogContent>

        </Dialog>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  closeAuth: () => dispatch(closeAuth())
  // closeDialog: () => dispatch(closeDialog()),
  // login: () => dispatch(login())
});

const mapStateToProps = state => ({ isAuthOpen: state.ui.isAuthDialogOpen });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Auth));
