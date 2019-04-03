const { buildSchema } = require("graphql");
var fs = require('fs');
const glob = require('glob');
let schema = ``;

let files = glob.sync(__dirname + '/**/*.graphql', {});

files.forEach(file => {
    schema += fs.readFileSync(file, 'utf8');
});
console.log(schema);

//
//buildSchema _ ში ხდეება მონაცემთ ბაზის სტრუქტურის აგება რათეიბლემი გვაქვს და რა ველები ასევე რა ტიპისებია ისინი
//მთავარ კომპონენტს წარმოადგენს schema ობიქტი რომელიც შეიცავს თავისთავად query_ს და mutation_ს ხოლო მათი მნიშვნელობები აერთიანებს ყველა ტიპსა თუ ინპუტს
//რაც შეიძლება აპლიკაციაში დაგვჭირდეს
//
module.exports = buildSchema(schema);
/**
 * `
    #მომხმარებლის აღწერა
    type User{
        _id: ID!
        email:String!
        name: String!
        password: String!
        posts:[Post!]
    }
    #მომხმარებლის ინპუტების აღწერა სათითაოდ წერა რომ არ დაგვჭირდეს მუტაციებში
    input UserInput{
        email:String!
        name: String!
        password: String!
    }

    type Post{
        _id: ID!
        title:String!
        description: String
        content: String!
        creator: User!
    }
    input PostInput{
        title:String!
        description: String
        content: String!
       
    }

    type AuthData{
        user: User!
        token: String!
        tokenExpiration: Int!
    }

    type RootQuery{
        posts: [Post!]!#ყველა პოსტის გამოტანა
        login(email: String!, password: String!): AuthData!
    }

    type RootMutation {
        createPost(postInput: PostInput): Post
        updatePost(postID: ID,postInput: PostInput): Post
        deletePost(postID: ID): Post
        createUser(userInput: UserInput): User
    }
    
`
 */