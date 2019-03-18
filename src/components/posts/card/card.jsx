import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
// import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Header from "./Header";
import Content from "./Content";


const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: 20
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});
const options = [
  { text: "შეცვლა", icon: <EditIcon /> },
  { text: "წაშლა", icon: <DeleteIcon /> }
];
class RecipeReviewCard extends React.Component {
  state = { expanded: false, open: false, anchorEl: null };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleMenuClose = () => {
    this.setState({ open: false, anchorEl: null });
  };
  handleMenuOpen = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <Header
          title={this.props.header.title}
          subheader={this.props.header.creationTime}
          handleMenuOpen={this.handleMenuOpen}
        />
        <Menu
          id="long-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onClose={this.handleMenuClose}
        >
          {options.map(option => (
            <MenuItem
              key={option.text}
              selected={option === "Pyxis"}
              onClick={this.handleMenuClose}
            >
              <ListItemIcon>{option.icon}</ListItemIcon>
              <ListItemText primary={option.text} />
            </MenuItem>
          ))}
        </Menu>
        <Content
          description={this.props.header.description}
          handleExpandClick={this.handleExpandClick}
          expanded={this.state.expanded}
          content={this.props.header.content}
        />
      </Card>
    );
  }
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(withStyles(styles)(RecipeReviewCard));
