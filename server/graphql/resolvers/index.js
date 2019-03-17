const bc = require("bcryptjs");
const user = require("./user")
const post = require("./posts")



module.exports = {

...post,
...user

};
