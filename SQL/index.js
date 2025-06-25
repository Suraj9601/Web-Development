const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require("method-override")

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password : 'root',
});

let  getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(), 
        faker.internet.email(),
        faker.internet.password(),
    ];
};



app.listen("8080", () => {
    console.log("Server is listening to port 8080");
});

app.get("/", (req, res) => {
    let q = `SELECT COUNT(*) FROM user`;
    try {
    connection.query(q, (err, result) => {
        if(err) throw err;
        console.log(result[0]["COUNT(*)"]);
        let count = result[0]["COUNT(*)"];
        res.render("home.ejs",{count});
    });
} catch (err) {
    console.log(err);
    res.send("SOME_ERROR_IN_DATABASE.")
}
});

app.get("/user", (req,res) => {
    try {
    let q = "SELECT * FROM user";
    connection.query(q, (err, users) => {
        if(err) throw err;
        res.render("show_user.ejs", { users });
    });
} catch (err) {
    console.log(err);
    res.send("SOME ERROR IN DATABASE.");
}
});

app.get("/user/:id/edit", (req, res) => {
    try {
    const {id} = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    connection.query(q, (err, result) => {
        if(err) throw err;
        let user = result[0];
        res.render("edit.ejs", {user});
    });
} catch (err) {
    console.log(err);
    res.send("SOME ERROR IN DATABASE.");
}
});

app.patch("/user/:id", (req, res) => {

    const {id} = req.params;
    const {password: formPass, username:newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`;

    try {
    connection.query(q, (err, result) => {
        if(err) throw err;
        let user = result[0];
        if(formPass != user.password ) {
            res.send("WRONG password");
        } else {
            let q2 = `UPDATE user SET username= '${newUsername}' WHERE id = '${id}'`;
            
                connection.query(q2, (err, result) => {
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
            });
        }        
    catch (err) {
        console.log(err);
        res.send("SOME ERROR IN DATABASE.");
}

});


// try {
//     connection.query(q, [data], (err, result) => {
//         if(err) throw err;
//         console.log(result);
//     });
// } catch (err) {
//     console.log(err);
// }

// connection.end();