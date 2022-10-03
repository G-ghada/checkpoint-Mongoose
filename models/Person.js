const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    favoriteFoods: {
      type: ["string"],
      required: true,
    },
  },
  { timestamps: true }
);

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
