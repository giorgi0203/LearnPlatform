const { buildSchema } = require("graphql");
const CombinedResolvers = require("./modules/combineResolvers");
const CombinedSchemas = require("./modules/combinedSchemas");

/**
 * თითოეული მოდული დაყოფილია schema.graphql+resolver.js ფაილებად 
 * ანუ აღწერა+იმპლემენტაცია
 * 
 * ხოლო ამ ფაილში ხდება კომბინირება აღწერების და იმპლემენტაციების
 */

module.exports={
    schema: buildSchema(CombinedSchemas),
    resolvers: CombinedResolvers
};
