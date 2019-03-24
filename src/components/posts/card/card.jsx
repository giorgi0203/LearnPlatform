import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import red from "@material-ui/core/colors/red";
import CardHeader from "@material-ui/core/CardHeader";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Content from "./content";

import { openEditor, closeEditor } from "../../../actions/ui";

const styles = theme => ({
  card: {
    maxWidth: 1000,
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
class RecipeReviewCard extends React.Component {
  state = { expanded: false, open: false, anchorEl: null };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleEditClick = () => {
    this.setState({ open: false, anchorEl: null });
    this.props.openEditor(this.props.postData.id);
    console.log("card edit button", this.props);
  };
  handleDeleteClick = () => {
    this.setState({ open: false, anchorEl: null });
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
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton onClick={this.handleMenuOpen}>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.postData.title}
          subheader={this.props.postData.creationTime}
        />
        <Menu
          id="long-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onClose={this.handleMenuClose}
        >
          <MenuItem key="edit" onClick={this.handleEditClick}>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText primary="შეცვლა" />
          </MenuItem>
          <MenuItem key="delete" onClick={this.handleDeleteClick}>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="წაშლა" />
          </MenuItem>
        </Menu>
        <Content
          description={this.props.postData.description}
          handleExpandClick={this.handleExpandClick}
          expanded={this.state.expanded}
          content={this.props.postData.content}
        />
      </Card>
    );
  }
}

const mapStateToProps = state => ({ state });
const mapDispatchToProps = dispatch => ({
  openEditor: payload => dispatch(openEditor(payload)),
  closeEditor: () => dispatch(closeEditor())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(RecipeReviewCard));
