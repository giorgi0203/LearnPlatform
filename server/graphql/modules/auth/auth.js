const User = require("../../../models/user");
const { userConnector } = require("../../helpers/connectors");
const bc = require("bcryptjs");
const jose = require("@panva/jose");
const {
  JWE, // JSON Web Encryption (JWE)
  JWK, // JSON Web Key (JWK)
  JWKS, // JSON Web Key Set (JWKS)
  JWS, // JSON Web Signature (JWS)
  JWT, // JSON Web Token (JWT)
  errors // errors utilized by @panva/jose
} = jose;
module.exports = {
  login: async args => {
    console.log(args);
    const hashedpwd = await bc.hash(args.password, 5);
    console.log(hashedpwd);
    try {
      const existingUser = await User.findOne({
        email: args.email
      });
      if (!existingUser) {
        throw new Error(`მომხმარებელი არ მოიძებნა`);
      }
      res = await bc.compare(args.password, existingUser.password);

      if (!res) {
        throw new Error(`არასწორი პაროლი`);
      }
      let user = {
        id: existingUser._doc._id,
        name: existingUser._doc.name,
        email: existingUser._doc.email
      };

      let key = JWK.generateSync("RSA", 2024);
      // console.log(key);

      var token = JWT.sign(user, key, {
        algorithm: 'PS256',
        audience: user.id.toString(),
        expiresIn: "1 hour",
        header: {
          typ: "JWT"
        }
      });

      return {
        user: userConnector.bind(this, existingUser),
        token: token,
        tokenExpiration: 10
      };
    } catch (err) {
      throw err;
    }
  }
};
