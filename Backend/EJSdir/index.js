const express = require("express");
const app = express();
const path = require("path");

let port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({extended : true}));

app.get("/", (req, res) => {
    res.render("Home.ejs");
});


app.get("/ig/:username", (req,res) => {
    console.log(req.params);
    let {username} = req.params;
    res.render("insta-username.ejs",{username});
});



app.get("/ig/profile/:username", (req, res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    if(data) {
        res.render("insta-profile.ejs", {data});
    } else {
        res.render("error.ejs");
    }
    
});

app.get("/register", (req, res) => {
    let {username, password} = req.query;
    console.log({username, password});
    res.send(`This is standerd response for GET request. Welcome ${username}`);
});
app.post("/register", (req, res) => {
    let {username, password} = req.body;
    console.log({username, password});
    res.send(`This is standerd response for POST request. Welcome ${username}`);
});

app.listen(port, () => {
    console.log("listening port on 8080");
})