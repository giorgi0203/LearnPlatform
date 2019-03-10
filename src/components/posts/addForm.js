import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const styles = theme => ({

  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  editor:{
    height:'60%'
  }

});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AddForm extends React.Component {
  state={open:false}
  handleClickOpen = () => {
    this.setState({ open: true,editorHtml:'' });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange (html) {
  	this.setState({ editorHtml: html });
  }
  modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }
  formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ]
  render() {
    const { classes } = this.props;

    return (
      <div >
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Sound
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>

          <ReactQuill 
          className={classes.editor}
          // theme={this.state.theme}
          // onChange={this.handleChange}
          value={this.state.editorHtml}
          modules={this.modules}
          formats={this.formats}
          // bounds={'.app'}
          placeholder={this.props.placeholder}
         />

        </Dialog>

        <Fab onClick={this.handleClickOpen} className={classes.fab} >
            <AddIcon />
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(AddForm);
