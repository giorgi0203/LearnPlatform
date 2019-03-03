
const bc = require("bcryptjs")
const User = require("../../models/user")

module.exports = {
    posts: ()=>{
        return {}
    },
    createUser: async (args)=>{
        try{
            const existingUser = await User.findOne({
                email: args.userInput.email
            })

            if (existingUser) {
                throw new Error(`მომხმარებელი ელექტრონული ფოსტით:${args.userInput.email} უკვე რეგისტრირებულია`);
            }
            
            const hashedpwd = await bc.hash(args.userInput.password,5);
            const user = new User({
                email: args.userInput.email,
                name: args.userInput.name,
                password: hashedpwd
            })
            console.log(user);
            const result = await user.save();

            return {...result._doc};
        }catch (err){
            throw err;
        }
    },
    createPost: async (args)=>{
        
    }
}