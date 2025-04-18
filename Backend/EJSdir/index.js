const express = require("express");
const app = express();
const path = require("path");

let port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("Home.ejs");
})
app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    if(data) {
        res.render("instagram.ejs", {data});
    } else {
        res.render("error.ejs");
    }
    
})

app.listen(port, () => {
    console.log("listening port on 8080");
})