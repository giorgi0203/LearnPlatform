import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

import { addPost } from "../../actions/posts";
import { openEditor,closeEditor } from "../../actions/ui";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import {modules,formats} from "./editorOptions";


import "react-quill/dist/quill.snow.css";

const styles = theme => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  },
  appBar: {
    position: "relative"
  },
  save: {
    flex: 1
  },
  dialogContent: {
    height: "100%"
  },
  editor:{
    height:'60%'
  },
  editorHolder:{
    height: '100%',
  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postData: { title:this.props.post.currentPostId,content:"",description:"" }
    };
    
    console.log("form open form",this.props);
    // alert();
    
    this.handleChange = this.handleChange.bind(this);
    this.handleTitleDescriptionChange = this.handleTitleDescriptionChange.bind(this);

  }

  componentDidMount(){
    console.log("mount props",this.props);
    
    
  }

  handleChange (html) {
  	this.setState({ 
      postData:{...this.state.postData,content:html}});
  }
  handleTitleDescriptionChange (event) {
    console.log(this.state.postData);
    
  	this.setState({ 
      postData:{...this.state.postData,[event.target.id]:event.target.value}
    });
  }

  handleOpen = () => {    
    this.props.openEditor({});
  };

  handleSave = () => {
    this.props.save({query:`
      mutation {
        createPost(postInput:{title:"${this.state.postData.title}",description:"${this.state.postData.description}",content:"${this.state.postData.content}"}){
          title
        }
      }
    `});
  };

  render() {
    const { classes } = this.props;
    
    //alert();
    return (
      <div className={classes.dialogContent}>
        <Dialog
          fullScreen
          open={this.props.ui.editorVisible}
          onClose={this.props.closeEditor}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={this.props.closeEditor}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Button
                color="inherit"
                className={classes.save}
                onClick={this.handleSave}
              >
                შენახვა
              </Button>
            </Toolbar>
          </AppBar>
          <TextField
          id="title"
          value={this.state.postData.title}
          // label="სათაური"
          style={{ margin: 10,padding:10 }}
          onChange={this.handleTitleDescriptionChange}
          placeholder="სათაური"
          // fullWidth
          margin="normal"
          inputProps={{
            style:{fontSize:25}
          }}

        />
        <TextField
          id="description"
          // label="აღწერა"
          style={{ margin: 10,padding:10 }}
          onChange={this.handleTitleDescriptionChange}
          placeholder="აღწერა"
          // fullWidth
          multiline={true}
          rows={10}
          margin="normal"
          inputProps={{
            style:{fontSize:20}
          }}
          />
          {/* posts text editor */}
          <ReactQuill 
          className={classes.editor}
          // theme={this.state.theme}
          onChange={this.handleChange}
          value={this.state.postData.content}
          modules={modules}
          formats={formats}
          // bounds={'.app'}
         />
        </Dialog>

        <Fab onClick={this.handleOpen} className={classes.fab}>
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ui: state.ui,
  post: state.posts.currentPostId
});
const mapDispatchToProps = dispatch => ({
  save: (payload) => dispatch(addPost(payload)),
  openEditor: (payload) => dispatch(openEditor(payload)),
  closeEditor: () => dispatch(closeEditor())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Form));
