const User = require("../../models/user");
const { userConnector } = require("./helpers/connectors");
const bc = require("bcryptjs")
module.exports = {
  login: async args => {
    console.log(args);
    const hashedpwd = await bc.hash(args.password, 5);
    console.log(hashedpwd);
    try {
        
      const existingUser = await User.findOne({
        email: args.email
      });
      res = await bc.compare(args.password,existingUser.password)
      console.log(res);
      
      if (!res) {
        throw new Error(
            `არასწორი პაროლი`
          );
      }
      if (!existingUser) {
        throw new Error(
          `მომხმარებელი არ მოიძებნა`
        );
      }
      
      
      return { user: userConnector.bind(this, existingUser),token:"superSecretToken",tokenExpiration:10 };
    } catch (err) {
      throw err;
    }
  }
};
