import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    top:"auto",
  },
};

class LeftDrawer extends React.Component {
  render() {
    const { classes } = this.props;

    const sideMenuList = (
      <div className={classes.list}>
        <List>
          {["მთავარი", "ctf-თამაშები", "ალგორითმები", "მასალები"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
        <Divider />
      </div>
    );

    return (
      <div>
        <Drawer
          open={this.props.isOpen}
          onClose={this.props.toggleDrawer(false)}
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div
            tabIndex={0}
            role="button"
            // onClick={this.props.toggleDrawer(false)}
            // onKeyDown={this.props.toggleDrawer(false)}
          >
            {sideMenuList}
          </div>
        </Drawer>
      </div>
    );
  }
}

LeftDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LeftDrawer);
