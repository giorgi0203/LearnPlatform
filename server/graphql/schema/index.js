const { buildSchema } = require("graphql");
//
//buildSchema _ ში ხდეება მონაცემთ ბაზის სტრუქტურის აგება რათეიბლემი გვაქვს და რა ველები ასევე რა ტიპისებია ისინი
//მთავარ კომპონენტს წარმოადგენს schema ობიქტი რომელიც შეიცავს თავისთავად query_ს და mutation_ს ხოლო მათი მნიშვნელობები აერთიანებს ყველა ტიპსა თუ ინპუტს
//რაც შეიძლება აპლიკაციაში დაგვჭირდეს
//
module.exports = buildSchema(`
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
        createUser(userInput: UserInput): User
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
