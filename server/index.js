const express = require("express");
const bodyParse = require("body-parser");
const graphql = require("express-graphql");
const mongoose = require("mongoose")
const { buildSchema } = require("graphql");


const _schema = require("./graphql/schema/index");
const _rootValue = require("./graphql/resolvers/index");

const app = express();
const API_PORT = 30001;

app.use(bodyParse.json());

app.use(
  "/graphql/api",
  graphql({
    schema: _schema,
    rootValue: _rootValue,
    graphiql: true
  })
);


mongoose.connect(`
    mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0-cfujr.gcp.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`
).then(()=>{
    app.listen(API_PORT, () => console.log(`სერვერი გაშვებულია ${API_PORT} პორტზე`));
}).catch((error)=>{
    console.log(error);
});




