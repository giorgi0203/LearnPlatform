import React, { Component } from "react";
import { connect } from "react-redux";
import LockOpen from "@material-ui/icons/LockOpen";
import Lock from "@material-ui/icons/Lock";
import ExitToApp from "@material-ui/icons/ExitToApp";
import AddIcon from "@material-ui/icons/Add";
import PersonIcon from "@material-ui/icons/Person";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import SaveIcon from "@material-ui/icons/Save";
import PrintIcon from "@material-ui/icons/Print";
import ShareIcon from "@material-ui/icons/Share";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";
import { openAuth } from "../actions";

import { logout } from "../../../index";
const styles = theme => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});
const actions = [
  { icon: <ExitToApp />, name: "Logout", action: "Logout" },
  { icon: <AddIcon />, name: "Add post", action: "PostAdd" }
];

class FabMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleClick = action => {
    if (action == "Logout") {
      this.props.logout();
    } else if (action == "PostAdd") {
      this.props.logout();
    }
    if (this.props.isLogged) {
      this.setState(state => ({
        open: !this.state.open
      }));
    } else {
      this.props.openAuth();
    }
  };
  render() {
    const { classes } = this.props;
    // log
    return (
      <div>
        <SpeedDial
          ariaLabel="menu"
          className={classes.fab}
          icon={this.props.isLogged ? <PersonIcon /> : <Lock />}
          onClick={this.handleClick}
          open={this.state.open}
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => {
                this.handleClick(action.name);
              }}
            />
          ))}
        </SpeedDial>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  openAuth: () => dispatch(openAuth()),
  logout: () => dispatch(logout())
});

const mapStateToProps = state => ({ isLogged: state.auth.authData.isLogged });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(FabMenu));
