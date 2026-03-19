const express = require("express");
const app = express();
//console.log(app);

let port = 3000;

app.listen(port, () => {
    console.log("Running on port 3000");
})

app.use((req , res) => {
    console.log("request recieve");
    res.send({
        name: "Aditya",
        surname: "Pratap ",
    });
})