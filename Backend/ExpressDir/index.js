const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})
// app.use((req, res) => {
//     // console.log(req);
//     console.log("request received");
//     res.send("This is a basic response");
// });

app.get("/", (req, res) => {
    res.send("you contacted home path");
});

app.get("/login", (req, res) => {
    res.send("you contacted login page");
});

app.get("/project", (req, res) => {
    res.send("you contacted project page");
});

app.get("/apple", (req, res) => {
    res.send("you contacted apple path");
});
