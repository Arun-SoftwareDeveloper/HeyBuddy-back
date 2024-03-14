// models/crud.js
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const crudSchema = new Schema({
  name: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String, required: true },
  socialMediaLink: String,
});

const crud = mongoose.model("crud", crudSchema);

module.exports = crud;
