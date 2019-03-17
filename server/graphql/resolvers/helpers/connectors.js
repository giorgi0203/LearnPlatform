const User = require("../../../models/user");
module.exports = {
  userConnector: async userID => {
    try {
      const user = await User.findById(userID);
      return { ...user._doc };
    } catch (error) {}
  }
};
