const express= require('express');
const connectDB = require("./config/database")
const app= express();
const User = require("./models/user");
const {validateSignUpData} = require("./utils/validation")
const bcrypt= require("bcrypt");

app.use(express.json());

//signup post api create
app.post("/signup", async(req,res)=>{
 
    try {   //validation of data
validateSignUpData(req);

const {firstName, lastName,emailId, password } = req.body;

    //encrypt the password 

    const passwordHash= await bcrypt.hash(password,10);
    console.log(passwordHash);
   
//creating new instance of the user models
    const user = new User({
        firstName,
        lastName,
        emailId,
        password: passwordHash,
    });
    
    await user.save();
    res.send("User Added succesfully");
 } catch (err) {
        res.status(400).send("ERROR : " + err.message);
    }
});

//login api
app.post("/login", async (req,res)=>{
    try{
        const {emailId, password} = req.body;

        const user = await User.findOne({ emailId: emailId});
        if(!user){
            throw new Error("Invalid credentials");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(isPasswordValid){
            res.send("Login successFull!!!");
        }
        else{
            throw new Error("Invalid credential");
        }

    } catch (err){
        res.status(400).send("ERROR : " + err.message);
    }
})
//Feed api 
app.get("/feed", async(req,res)=>{
try{
    const users = await User.find({});
    res.send(users);
} catch (err){
    res.status(400).send("Something went wrong!");
}
});

//Delete a user from the database
app.delete("/user", async (req,res)=>{
    const userid = req.body.userId;
    try{
        const user = await user.findByIdAndDelete({ _id:userId});
        res.send("User deleted successfullt");
    } catch (err){
        res.status(400).send("something went wrong!");
    }
})

//update dat of the user
app.patch("/user/:userId", async (req,res)=>{
    const userId = req.params?.userId;
    const data = req.body;

   
    try{
        const ALLOWED_UPDATES =[
             "photourl", "about", "gender", "age", "skills"
          ]
      
          const isUpdateAllowed = Object.keys(data).every(k => ALLOWED_UPDATES.includes(k)
      );
      if(!isUpdateAllowed){
          throw new Error("Update not allowed");
      }
      if (data?.skills.length >10){
        throw new Error("skills cannot be more than 10");
      }
        const user = await User.findByIdAndUpdate({ _id: userId}, data, {
            returnDocument: "after",
            runValidator: true,
        });
      console.log(user);
    res.send("user updated successfully");
} catch (err) {
    res.status(400).send("Updated failed:" + err.message);
}
});

connectDB()
.then(()=>{
    console.log("Database connection establishes...");
    app.listen(3000);
    console.log("app is listening to port 3000");

})
.catch((err)=>{
    console.log("databse cannot be connected!");
})
