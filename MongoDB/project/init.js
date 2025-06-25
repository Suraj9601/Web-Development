const mongoose = require('mongoose');
const Chat = require("./models/chats");

main()
.then((res) => {
    console.log("Connection Successful.");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
};

let allChats = [
    {
    from: "Ravi",
    to: "Aman",
    message: "Let's meet at the library.",
    created_at: new Date(),
},
{
    from: "Anjali",
    to: "Karan",
    message: "Don't forget the presentation tomorrow.",
    created_at: new Date(),
},
{
    from: "Sahil",
    to: "Riya",
    message: "Can you share your notes?",
    created_at: new Date(),
},
{
    from: "Tina",
    to: "Arjun",
    message: "Call me when you're free.",
    created_at: new Date(),
},
{
    from: "Ravi",
    to: "Aman",
    message: "Let’s meet at 5 PM.",
    created_at: new Date(),
},
{
    from: "Anjali",
    to: "Karan",
    message: "Project deadline is tomorrow!",
    created_at: new Date(),
}

]

Chat.insertMany(allChats);