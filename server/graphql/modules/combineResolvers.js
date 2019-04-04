const user = require("./user/user");
const post = require("./post/posts");
const auth = require("./auth/auth");

module.exports={
    ...post,
    ...user,
    ...auth
  };