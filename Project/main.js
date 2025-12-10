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



// const express = require("express");
// const app = express();
// app.use(express.json());
// const userRouter = require("./routes/userRoutes");
// app.use("/users", userRouter);
// app.listen(3000, () => {
//     console.log("Server connected successfully");
// });


// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();
// const PORT = 3000;

// //middleware
// app.use(express.json());

// //STEP-1: CONNECTING MONGODB
// const MONGO_URL = "mongodb://localhost:27017/Advanced_Fullstack";
// mongoose.connect(MONGO_URL).then(()=>console.log("Connection to MONGODB is successfully done")).catch((err) => console.log("Error in connect: Connection failed", err.message));
// //STEP-2: BUILD A SCHEMA

// const userSchema = new mongoose.Schema(
//     {
//         name: {
//             type:String,
//             required: true,
//             trim: true
//         }
//     },
//       {timestamps: true}
    
// );

// //STEP-3: CREATE A MODEL
// // create user always in capital and also without 's'

// const User = mongoose.model("User", userSchema);

// app.get("/users", async(req, res) => {
//     try{
//         const users = await User.find();
//         res.status(200).json(users);
//     }
//     catch(err)
//     {
//         res.status(500).json({message: "Server Error"});
//     }
// });

// app.post("/users", async (req,res) => {
//     try{
//     const { name } = req.body;

//     if(!name)
//     {
//         return res.status(400).json({message: "Name is required"});
//     }

//     const newUser = new User({name});
//     const savedUser = await newUser.save();
    
//     res.status(201).json({
//         message: "User created successfully",
//         user: savedUser
//     })
// }   
// catch(err)
// {
//     res.status(500).json({message: "Server Issue"});
// }

// });

// app.put("/users/:id", async(req, res) =>{
//     try{
//         const userId = req.params.id;
//         const {name} = req.body;

//         const updatedUser = await User.findByIdAndUpdate(userId, {name},
//             {new:true, runValidators:true}
//         );

//         if(!updatedUser)
//         {
//             return res.status(404).json({message: "User not found"});
//         }
//         res.status(200).json({
//             message: "User updated successfully",
//             user: updatedUser
//         })
//     }
//     catch(err){
//         res.status(500).json({message: "Server Issue"});
//     }
// })
// app.delete("/users/:id", async (req, res) => {
//     try {
//         const userId = req.params.id;

//         const deletedUser = await User.findByIdAndDelete(userId);

//         if (!deletedUser) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         res.status(200).json({
//             message: "User deleted successfully",
//             user: deletedUser
//         });
//     } catch (err) {
//         res.status(500).json({ message: "Server Issue" });
//     }
// });

// app.listen(PORT, ()=>{
//     console.log("Server running successfully");
// })











const express = require("express");
const connectDB = require("../Day_3/config/db");
const userRoutes = require("../Day_3/userRoutes");

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

// DB connection
connectDB();

// routes
app.use("/",userRoutes);

app.listen(PORT, () => {
  console.log("Server running successfully");
});
