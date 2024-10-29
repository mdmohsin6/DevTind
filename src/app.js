const express= require('express');
const connectDB = require("./config/database")
const app= express();
const User = require("./models/user");

app.use(express.json());


//signup post api create
app.post("/signup", async(req,res)=>{

   
//creating new instance of the user models
    const user = new User(req.body);

    try {
        await user.save();
   res.send("User Added succesfully");
    } catch (err) {
        res.status(400).send("Error saving the user:" + err.message);
    }
   
});

//update dat of the user
app.patch("/user", async (req,res)=>{
    const userId = req.body.userId;
    const data = req.body;
    try{
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
