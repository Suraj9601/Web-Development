const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require("./models/chats");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));


async function main() {
    await mongoose.connect("mongodb://localhost:27017/whatsapp")
};

main()
.then(res => { 
    console.log("Connect Successfully.");
}) .catch(err => {
    console.log(err);
});


app.get("/chats",async (req, res) => {
    let chats = await Chat.find();
    res.render("index.ejs", {chats});
});

app.get("/chats/new", (req,res) => {
    res.render("new-chat.ejs");
});

app.post("/chats/new" ,(req, res) => {
    let newChat = req.body;
    
    Chat.insertOne(newChat)
    .then(result => {
        console.log("Chat Saved!");
    }) .catch(err => {
        console.log(err);
    });
    res.redirect("/chats");
});

app.get('/chats/:id/edit', async (req, res) => {
    const { id } = req.params;
    const chat = await Chat.findById(id);
    if (!chat) {
        return res.status(404).send('Chat not found');
    }
    res.render('edit', { chat });
});

app.put("/chats/:id", async(req, res) => {
    const { id } = req.params;
    const { from, to, message } = req.body;

    await Chat.findByIdAndUpdate(id, { from, to, message }, { new: true, runValidators: true })
        .then(() => res.redirect("/chats"))
        .catch(err => {
            console.error("Update error:", err);
            res.status(500).send("Something went wrong");
        });
});


app.delete("/chats/:id", async (req, res) => {
    const { id } = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});




app.listen("8080","0.0.0.0", () => {
    console.log("Server is listening on port 8080");
    
});