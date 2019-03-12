import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Slide from '@material-ui/core/Slide';

import {addPost} from '../../actions/posts'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const styles = theme => ({
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

class Editor extends React.Component {
  constructor(props){
      super(props);

      this.state = {
        editorHtml: ''
      }
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
      <div className={classes.editorHolder}>

          <ReactQuill 
          className={classes.editor}
          // theme={this.state.theme}
          onChange={this.props.handleChange}
          value={this.props.html}
          modules={this.modules}
          formats={this.formats}
          // bounds={'.app'}
          placeholder={this.props.placeholder}
         />

      </div>
    );
  }
}


export default (withStyles(styles)(Editor));
