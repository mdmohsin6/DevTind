const express= require('express');
const app= express();

app.use("/", (err,req,res,next)=>{
    if(err){
        res.status(500).send("something went wrong!!");
    }
})

app.get("/getUserData", (req,res)=>{
    throw new Error ("fsddffdbfd");
    
res.send("user data sent!!");

});
app.use("/", (err,req,res,next)=>{
    if(err){
        res.status(500).send("somethung went wrong!!");
    }
})


app.listen(3000);
console.log("app is listening to port 3000");