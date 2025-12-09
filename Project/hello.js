// const {add} = require("./app.js");
// const {mul} = require("./app.js");
// const {sub} = require("./app.js");
// console.log(add(10,20));
// console.log(mul(20,30));
// console.log(sub(100,30));




// const fs = require("fs");
// fs.writeFile("hello.txt", "Hello world", "UTF-8", (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("Created successfully");
// });




// Updating inside the text file

// const fs = require("fs");
// fs.appendFile("hello.txt", " New Text Updated", (err) => {
//     if(err){
//         console.log("Error: ",err);
//         return;
//     }
//     console.log("Data updated successfully");
// })






// // renaming the text file

// fs.rename("hello.txt","new.txt",(err) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("Rename is success");

// })






// //deleting the whole content in the file

// fs.unlink("new.txt", (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("File deleted");
// })




//path

// const path = require ("path");
// const filepath = "/Advanced_fullstack/Project/app.js"
// console.log("Base name: ", path.basename(filepath));
// console.log("Directory name: ", path.dirname(filepath));
// console.log("Extension name: ", path.extname(filepath));
// const joinedPath = path.join(__dirname, "public", "index.html");
// console.log(joinedPath);




// install and importing can be done by const os

// const os = require("os");
// console.log(os.platform());
// console.log("Platform:  ", os.platform());
// console.log("Type: ",os.type());
// console.log("Total Memory: ",os.totalmem());
// console.log("Free Memory: ",os.freemem());
// console.log("Home Directory: ",os.homedir());
// console.log("CPU Info: ",os.cpus());




//Importing http using boilerplate

const http = require("http");
const server = http.createServer((req,res) => {
    res.writeHead(200, {"content-type": "text/plain"});

    if(req.url === "/")
    {
        res.end("Welcome to my nodejs server");
    }
    else if(req.url === "/about") 
    {
        res.end("Welcome to about page");
    }
    else
    {
        res.statusCode = 404;
        res.end("Page not found")
    }
});

server.listen(3001, () => {
    console.log("Server is created successfully");
});

