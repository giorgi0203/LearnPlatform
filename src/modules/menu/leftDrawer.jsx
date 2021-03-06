import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Home from "@material-ui/icons/Home";
import Folder from "@material-ui/icons/Folder";
import Games from "@material-ui/icons/Games";
import Memory from "@material-ui/icons/Memory";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerPaper: {
    width: 240,
    top: "auto"
  }
};
let menuItems = [
  { title: "მთავარი", icon: <Home />, link: <Link to="/home">მთავარი</Link> },
  {
    title: "სამუშაო გარემო",
    icon: <Folder />,
    link: <Link to="/work">სამუშაო გარემო</Link>
  },
  {
    title: "ctf-თამაშები",
    icon: <Games />,
    link: <Link to="/ctf">ctf-თამაშები</Link>
  },
  {
    title: "ალგორითმები",
    icon: <Memory />,
    link: <Link to="/alg">ალგორითმები</Link>
  },
  {
    title: "მასალები",
    icon: <LibraryBooks />,
    link: <Link to="/lib">მასალები</Link>
  }
];
class LeftDrawer extends React.Component {
  render() {
    const { classes } = this.props;

    const sideMenuList = (
      <div className={classes.list}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={item.title}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              {item.link}
            </ListItem>
          ))}
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
