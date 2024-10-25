const express= require('express');
const app= express();

// app.use("/", (req, res) => {
//     res.send("hello welome to dev tinder");
// })
app.use("/test", (req, res) => {
    res.send("Heyy this is for the test");
})

app.listen(3000);
console.log("app is listening to port 3000");