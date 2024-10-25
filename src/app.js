const express= require('express');
const app= express();

//This will only handle Get call to /user
app.get("/user", (req,res)=>{
    res.send({
        "FNamw":"Mohsin",
        "LName": "Khan"
    })

})

app.post("/user", (req,res) => {
    res.send("Data successfully saved to the database")
})
app.delete("/user", (req,res) => {
    res.send("Data deleted succesfully")
})

//This will mach all the HTTP method API call /test
app.use("/test", (req, res) => {
    res.send("Heyy this is for the test");
})
app.use("/", (req, res) => {
    res.send("hello welome to dev tinder");
})

app.listen(3000);
console.log("app is listening to port 3000");