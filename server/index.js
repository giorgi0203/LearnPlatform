const express = require("express");
const bodyParse = require("body-parser")
const graphql = require("express-graphql");
const {buildSchema} = require("graphql");


const app = express();
const API_PORT = 30001;

app.use(bodyParse.json());

app.use(
    '/graphql/api',
    graphql({
        schema: buildSchema(`
            type RootQuery{
                posts: [String!]!
            }

            type RootMutation {
                createPost(name: String): String
            }
            schema {
                query: RootQuery
                mutation: RootMutation
            }
        `),
        rootValue: {
            posts: ()=>{
                return ['1','2']
            },
            createPost: ()=>{

            }
        },
        graphiql: true
    })
    
)

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));