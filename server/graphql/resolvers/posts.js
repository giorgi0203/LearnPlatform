const User = require("../../models/user");
const Post = require("../../models/post");
const { userConnector } = require("./helpers/connectors");
module.exports = {
  posts: async () => {
    const posts = await Post.find();

    return posts.map(post => {
      return { ...post._doc, creator: userConnector.bind(this, post.creator) };
    });
  },
  createPost: async args => {
    try {
      const post = new Post({
        title: args.postInput.title,
        description: args.postInput.description,
        content: args.postInput.content,
        creator: "5c7beb9d0ae1d604503f0a13"
      });
      

      const createdPost = await post.save();
      const creator = await User.findById("5c7beb9d0ae1d604503f0a13");

      creator.createdPosts.push(createdPost);
      await creator.save();
      return { ...createdPost._doc };
    } catch (err) {
      throw err;
    }
  },
  updatePost: async args => {
    try {
    
      const post = await Post.findOneAndUpdate(args.postID,{
        title: args.postInput.title,
        description: args.postInput.description,
        content: args.postInput.content,
      });
      console.log(post._doc);
      return { ...post._doc };
    } catch (err) {
      throw err;
    }
  }
};
