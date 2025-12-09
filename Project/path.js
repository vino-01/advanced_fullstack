
const path = require ("path");

const filepath = "/Advanced_fullstack/Project/app.js"

console.log("Base name: ", path.basename(filepath));
console.log("Directory name: ", path.dirname(filepath));
console.log("Extension name: ", path.extname(filepath));


const joinedPath = path.join(__dirname, "public", "index.html");
console.log(joinedPath);
