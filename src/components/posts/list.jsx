import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Card from "./card/card";
import { fetchPosts } from "../../actions/posts";

const styles = theme => ({
  List: {
    margin: "auto",
    maxWidth: 600,
    left: "50%"
  }
});
class PostsList extends Component {
  componentDidMount() {
    //მოთხოვნის სტანდარტი რომელიც შეგვიძლია გავაკეთოთ ნებისმიერი კომპონენტიდან თუ გვაქვს შესაბამისი მიდლვეარი
    this.props.fetchPosts({query:`
      query{
        posts{
          _id
          title
          description
          content
        }
      }
    `});
  }
  render() {
    let Posts = <h1>პოსტები ცარიელია</h1>;

    Posts = this.props.posts.posts.map((item, key) => (
      <Card
        key={item._id}
        header={{
          title: item.title,
          creationTime: item._id,
          description: item.description,
          content: item.content
        }}
      />
    ));

    const { classes } = this.props;
    return <div className={classes.List}>{Posts}</div>;
  }
}

const mapStateToProps = state => ({ posts: state.posts });
const mapDispatchToProps = dispatch => ({
  fetchPosts: (payload) => dispatch(fetchPosts(payload))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(PostsList));
