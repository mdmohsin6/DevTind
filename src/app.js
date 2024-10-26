const express= require('express');
const app= express();

const { adminAuth} = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.get("/user", (req,res)=>{
    res.send("User Data sent!");
})
app.get("/admin/getAllData", (req,res)=>{
    res.send("All Data Sent!");

})
app.get("admin/deleteUser", (req,res)=>{
    res.send("Delete user!")
})
//This will only handle Get call to /user
app.get("/user", (req,res)=>{
    res.send({
        "FNamw":"Mohsin",
        "LName": "Khan"
    })

})


app.listen(3000);
console.log("app is listening to port 3000");