const bc = require("bcryptjs");
const user = require("./user")
const post = require("./posts")
const auth = require("./auth")



module.exports = {

...post,
...user,
...auth

};
