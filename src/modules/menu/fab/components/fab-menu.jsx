import React, { Component } from "react";
import { connect } from 'react-redux';
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import PersonIcon from "@material-ui/icons/Person";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});
const actions = [
  { icon: <AddIcon />, name: "Add" }
];

class FabMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleClick = () => {
    this.setState(state => ({
      open: !this.state.open
    }));
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        <SpeedDial
          ariaLabel="menu"
          className={classes.fab}
          icon={<PersonIcon />}
          onClick={this.handleClick}
          open={this.state.open}
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={this.handleClick}
            />
          ))}
        </SpeedDial>
      </div>
    );
  }
}

const mapDispatchToProps =  dispatch => ({
  // openDialog: () => dispatch(openDialog()),
  // closeDialog: () => dispatch(closeDialog()),
  // login: () => dispatch(login())
})

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles, { withTheme: true })(FabMenu));
