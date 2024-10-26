const express= require('express');
const connectDB = require("./config/database")
const app= express();
const User = require("./models/user");


//signup post api create
app.post("/signup", async(req,res)=>{
   
//creating new instance of the user models
    const user = new User({
        firstName: "Virat",
        lastName: "Kohli",
        emailId: "kohli3@gmail.com",
        password: "kohli123"
    });

    try {
        await user.save();
   res.send("User Added succesfully");
    } catch (err) {
        res.status(400).send("Error saving the user:" + err.message);
    }
   
})

connectDB()
.then(()=>{
    console.log("Database connection establishes...");
    app.listen(3000);
    console.log("app is listening to port 3000");

})
.catch((err)=>{
    console.log("databse cannot be connected!");
})
