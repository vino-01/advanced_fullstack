// install and importing can be done by const os

const os = require("os");

console.log(os.platform());

console.log("Platform:  ", os.platform());
console.log("Type: ",os.type());
console.log("Total Memory: ",os.totalmem());
console.log("Free Memory: ",os.freemem());
console.log("Home Directory: ",os.homedir());
console.log("CPU Info: ",os.cpus()); 