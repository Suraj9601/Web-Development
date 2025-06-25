const mongoose = require("mongoose");

async function main() {
    await mongoose.connect("mongodb://localhost:27017/amazon");
}

main()
    .then(() => {
        console.log("Connection Successful.");
    })
    .catch((err) => console.log(err));

    const bookSchema = new mongoose.Schema({
        name : {
            type: String,
            required : true,
        },
        author : {
            type:String,
        },
        price:{
            type:Number,
            min:0,
        },
        Discount: {
            type:Number,
            default:0,
        },
        genre : [String],
    });

const Book = mongoose.model("Book", bookSchema);

// Book.insertOne({
//     name:"Atomic Habits",
//     author:"James Clear",
//     price:500,
// }).then(res => {
//     console.log(res);
// }) .catch(err => {
//     console.log(err);
// });

Book.insertOne({
    name:"1984",
    author:"George",
    price:299,
    genre:["Comics", "Superheroes", "Fiction"],
}).then(res => {
    console.log(res);
}) .catch(err => {
    console.log(err);
});