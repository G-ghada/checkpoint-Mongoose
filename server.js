const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const Person = require("./models/Person");

const port = process.env.PORT || 5000;

// connection to database
mongoose
  .connect(
    "mongodb+srv://ghadabousselmi:07947627@cluster0.t08dtrb.mongodb.net/Checkpoint?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to data base"))
  .catch((err) => console.log(err));

//CRUD
//CREATE A PERSON
// const newPerson = new Person({
//     name: "sabrine",
//     age:21,
//     favoriteFoods:["riz","koskous","Frite"],
// });

//*****saving the person document******
// newPerson.save((err,result) => {
//     if(err) throw err;
//     console.log("Person added succefully");
// });
//****Create Many Records with model.create()** */

//const arrayOfPeople = [
//   { name: "ghada", age: 30, favoriteFoods: ["spaguetti", "pizza", "kouskous"] },
//   { name: "Jihen", age: 26, favoriteFoods: ["Ojja", "pizza", "Salade"] },
//   { name: "wiem", age: 24, favoriteFoods: ["pizza", "Poisson", "Salade"] },
// ];

// Person.create(arrayOfPeople).then((data) => {
//   console.log(data);
// });

//*****Find all the people having a given name*****

// Person.find({ name: "ghada" },(err, result) =>{
//     if (err) throw err;
//     console.log(result)
// });

//*****Find just one person which has a certain food in the person's favorites*****

// Person.findOne({ favoriteFoods: {$in: ["spaguetti", "pizza"] }}, (err, result) => {
//   if (err) throw err;
//   console.log(result);
// });

//*****Find a person by _id*****

// var id = "633a9f43605b3e4ac2f271f7";
// Person.findById(id,(err,result) => {
//     if(err) throw err;
//     console.log(result)
// });

//*****Perform Classic Updates by Running Find, Edit, then Save*****

// Person.findByIdAndUpdate({_id:"633a9f43605b3e4ac2f271f7"}, {
//     $push: { favoriteFoods: "hamburger" }}).then((data) => {
//         console.log(data);
//     }).catch((err) => console.log(err));

//*****Find a person by Name and set the person's age to 20*****

// Person.findOneAndUpdate({ name: "Jihen" },{ age: 20 } ,
//   { new: true },
//   (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   }
// );

//*********Delete One Document Using model.findByIdAndRemove *******
// Person.findByIdAndRemove("633a9f43605b3e4ac2f271f6", (err, result) => {
//   if (err) throw err;
//   console.log("deleted successfully");
// });

//*****Delete Many Documents with model.remove()*******/
// Person.remove({name :"Ghada"}, (err, result) => {
//   if (err) throw err;
//   console.log("deleted successfully");
// });

// person.find({ favoriteFoods: { $in: ["burritos"] }.sort().limit(2) });

app.listen(port, () => {
  console.log("server is up and running ...");
});
