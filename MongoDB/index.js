const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/test");
}

main()
  .then(() => {
    console.log("Connection Successful.");
  })
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

const user1 = new User({
  name:"Suraj",
  email: "Suraj01@gmail.com",
  age: 19
});

const user2 = new User({
  name:"Saurabh",
  email:"Saurabh@gmail.com",
  age:21,
});

// user1.save()
// .then(res => {
//   console.log(res)
// }) .catch(err => {
//   console.log(err)
// });

// user2.save()
// .then(res => {
//   console.log(res)
// }) .catch(err => {
//   console.log(err)
// });


// User.insertMany([
//   {name:"Adam", email:"adam@gmail.com", age:26},
//   {name:"Casey", email:"casey@gmail.com", age:31},
//   {name:"Tony", email:"tony@gmail.com", age:21}

// ]);

// User.find({})
// .then(res => {
//   console.log(res);
// }) .catch(err => {
//   console.log(err);
// });

// User.updateOne({name:"Suraj"}, {age:19})
// .then(res => {
//   console.log(res)
// }) .catch(err => {
//   console.log(err)
// });

// User.updateOne({name:"Saurabh"}, {age:21})
// .then(res => {
//   console.log(res)
// }) .catch(err => {
//   console.log(err)
// });


User.findOneAndUpdate({name:"Tony"}, {age: 29}, {new:true})
.then(res => {
  console.log(res);
}) .catch(err => {
  console.log(err);
});