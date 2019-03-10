//require('dotenv/config')
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
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
  //ბრაუზერი წინასწარ აგზავნის ამ მეთოდს იმის გასარკვევად თუ რომელ მეთოდებს იღებს სერვერი მაგრამ
  //graphql_ს არ შეუძლია ამ რექვესთის დამუშავება ამიტომ წარმატების კოდს ვაბრუნებთ უკან
  if (req.method == 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});
app.use(
  "/graphql/api",
  graphql({
    schema: _schema,
    rootValue: _rootValue,
    graphiql: true
  })
);

app.get(
  "/",
  (req,res)=>{
    res.send("<a href='/graphql/api'>api</a>");
  }
);


mongoose.connect(`
    mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0-cfujr.gcp.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`
).then(()=>{
    app.listen(API_PORT, () => console.log(`სერვერი გაშვებულია ${API_PORT} პორტზე`));
}).catch((error)=>{
    console.log(error);
});




