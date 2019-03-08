import React, { Component } from 'react'
import  { connect } from 'react-redux'

import  { fetchPosts } from '../../actions/posts'

class PostsList extends Component {
    componentDidMount(){
        this.props.fetchPosts()
    }
  render() {
    return (
      <div>
        პოსტების სია
      </div>
    )
  }
}


const mapStateToProps = (state) => ({state});
const mapDispatchToProps =  dispatch => ({
    fetchPosts: () => dispatch(fetchPosts())
})
export default connect(null,mapDispatchToProps)(PostsList);
