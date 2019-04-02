const User = require("../../models/user");
const bc = require("bcryptjs")
module.exports = {
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
  }
};
