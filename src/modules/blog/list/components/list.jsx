import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Card from "./card/card";
import { fetchPosts } from "../actions";

const styles = theme => ({
  List: {
    margin: "auto",
    maxWidth: 800,
    left: "50%"
  },
  emptyCenter: {
    textAlign: "center"
  }
});
class PostsList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //მოთხოვნის სტანდარტი რომელიც შეგვიძლია გავაკეთოთ ნებისმიერი კომპონენტიდან თუ გვაქვს შესაბამისი მიდლვეარი
    this.props.fetch();
  }
  onAction() {}
  render() {
    const { classes } = this.props;
    let Posts = <h1 className={classes.emptyCenter}>პოსტები არ არის</h1>;
    if (this.props.posts) {
      Posts = this.props.posts.map((item, key) => (
        <Card
          key={item._id}
          onAction={this.onAction}
          image={
            "https://picsum.photos/700/400/?image=" +
            parseInt(Math.random() * 100)
          }
          postData={{
            id: item._id,
            title: item.title,
            creationTime: "2019",
            description: item.description,
            content: item.content
          }}
        />
      ));
    }

    return <div className={classes.List}>{Posts}</div>;
  }
}

const mapStateToProps = state => ({
  posts: state.blog.posts
})
const mapDispatchToProps = dispatch => ({
  fetch: payload => dispatch(fetchPosts(payload))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(PostsList));
