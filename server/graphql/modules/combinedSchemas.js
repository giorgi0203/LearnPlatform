var fs = require("fs");
const glob = require("glob");
let combinedSchemaStr = ``;

//ვიპოვოთ და წავიკითხოთ ყველა ფაილი გაფართოებით graphql 
//და ვაქციოთ ერთ მთლიან სთრინგად რომელსაც გაპარსავს graphql ბიბლიოთეკა
let files = glob.sync(__dirname + "/**/*.graphql", {});

files.forEach(file => {
    combinedSchemaStr += fs.readFileSync(file, "utf8");
});

module.exports = combinedSchemaStr;