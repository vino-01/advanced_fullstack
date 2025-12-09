// const express = require("express");
// const app = express();
// app.get('/', (req, res) => {
//     res.send('Hello, Welcome to my Express world!');
// })
// app.listen(3000, () => {
//     console.log("server created");
// })




// const express = require("express");
// const app = express();
// const router = express.Router();
// //use json.. whenever middleware is used along with that json is used(Middleware to read json body)
// app.use (express.json());
// let users = [
//     {
//         id: 1,
//         name: "Vino",
//     }
// ];
// router.get("/users", (req,res) => {
//     res.status(200).json(users);
// });
// router.get("/users/:id", (req,res)=>{
//      const userId = parseInt(req.params.id);
//      const user = users.find(u => u.id === userId);
//      if(!user){
//         return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json(user);
// })
// router.post("/users", (req,res) => {
//   const newUser = req.body;
//   const user = {
//     id: users.length + 1,
//     name: newUser.name
//   }  
//   users.push(user);
//   res.status(201).json({
//     message: "User created successully",
//     user: user
//   })
// });
// router.put("/users/:id", (req,res) => {
//     const userId = parseInt(req.params.id);
//     const updatedUser = req.body;
//     const userIndex = users.findIndex(u => u.id === userId)
    
// if(userIndex === -1)
// {
//     return res.status(404).json({message: "User not found"});
// }
// users[userIndex].name = updatedUser.name;
// res.json({
//     message: "User ${userId} is updated successfully",
//     updatedUser: users[userIndex]
// })
// })
// router.delete("/users/:id", (req,res) => {
//     const deletedId = parseInt(req.params.id);
//     const filteredUsers = users.filter(user => {
//        return user.id !== deletedId
//     })
//     if(filteredUsers.length == users.length){
//         return res.status(404).json({message:"User not found"});
//     }
//     users = filteredUsers;
//     res.json({message: `User ${deletedId} deleted successfully`});
// })
// app.use(express.json());
// const userRouter = require("./routes/userRoutes");
// app.use("/users",userRouter);
// app.listen(3000,() => {
//     console.log("Server connected successfully");
// });



const express = require("express");
const app = express();
app.use(express.json());
const userRouter = require("./routes/userRoutes");
app.use("/users", userRouter);
app.listen(3000, () => {
    console.log("Server connected successfully");
});
