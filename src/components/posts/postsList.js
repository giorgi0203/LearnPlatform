import React, { Component } from 'react'
import  { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import  PostCard from './postCard'
import  { fetchPosts } from '../../actions/posts'

const styles = theme => ({
  List: {
    margin: "auto",
    maxWidth: 600,
    left: '50%',
  }
});
class PostsList extends Component {
    componentDidMount(){
       this.props.fetchPosts()
    }
  render() {
    
    let Posts = <h1>პოსტები ცარიელია</h1>;
    console.log("list",this.props);
    
      Posts = this.props.posts.posts.map((item, key)=>
      <PostCard key={item.title} header={ {title:item.title,creationTime:'',description:item.description,content:item.content} }/>
      );
    
    const { classes } = this.props;
    return (
      <div className={classes.List}>
        {Posts}
      </div>
    )
  }
}


const mapStateToProps = (state) => ({posts:state.posts});
const mapDispatchToProps =  dispatch => ({
    fetchPosts: () => dispatch(fetchPosts())
})
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(PostsList));
