const bc = require("bcryptjs");
const User = require("../../models/user");
const Post = require("../../models/post");

const user = async userID => {
  try {
    const user = await User.findById(userID);
    return { ...user._doc };
  } catch (error) {}
};

module.exports = {
  posts: async () => {
    const posts = await Post.find();

    return posts.map(post => {
      return { ...post._doc, creator: user.bind(this, post.creator) };
    });
  },
  createUser: async args => {
    try {
      const existingUser = await User.findOne({
        email: args.userInput.email
      });

      if (existingUser) {
        throw new Error(
          `მომხმარებელი ელექტრონული ფოსტით:${
            args.userInput.email
          } უკვე რეგისტრირებულია`
        );
      }

      const hashedpwd = await bc.hash(args.userInput.password, 5);
      const user = new User({
        email: args.userInput.email,
        name: args.userInput.name,
        password: hashedpwd
      });
      const result = await user.save();

      return { ...result._doc };
    } catch (err) {
      throw err;
    }
  },
  createPost: async args => {
    try {
      const post = new Post({
        title: args.postInput.title,
        description: args.postInput.description.replace('"','\"'),
        content: args.postInput.content.replace('"','\"'),
        creator: "5c7beb9d0ae1d604503f0a13"
      });
      console.log(post);
      
      const createdPost = await post.save();
      const creator = await User.findById("5c7beb9d0ae1d604503f0a13");

      creator.createdPosts.push(createdPost);
      await creator.save();
      return { ...createdPost._doc };
    } catch (err) {
      throw err;
    }
  }
};
