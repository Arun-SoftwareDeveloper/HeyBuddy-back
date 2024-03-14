// controllers/crudController.js
const Crud = require("../Models/CrudModel");

// Create crud
exports.createcrud = async (req, res) => {
  try {
    const { name, mobileNumber, email, location, socialMediaLink } = req.body;
    const newcrud = new Crud({
      name,
      mobileNumber,
      email,
      location,
      socialMediaLink,
    });
    await newcrud.save();
    res.status(201).json(newcrud); // HTTP 201 Created
  } catch (error) {
    res.status(400).json("Error: " + error.message);
  }
};

// Get all cruds
exports.getAllcruds = async (req, res) => {
  try {
    const cruds = await Crud.find();
    res.json(cruds);
  } catch (error) {
    res.status(500).json("Error: " + error.message); // HTTP 500 Internal Server Error
  }
};

// Get crud by ID
exports.getcrudById = async (req, res) => {
  try {
    const crud = await Crud.findById(req.params.id);
    if (!crud) {
      return res.status(404).json("crud not found"); // HTTP 404 Not Found
    }
    res.json(crud);
  } catch (error) {
    res.status(400).json("Error: " + error.message);
  }
};

// Update crud by ID
exports.updatecrudById = async (req, res) => {
  try {
    const crud = await Crud.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    if (!crud) {
      return res.status(404).json("crud not found");
    }
    res.json(crud);
  } catch (error) {
    res.status(400).json("Error: " + error.message);
  }
};

// Delete crud by ID
exports.deletecrudById = async (req, res) => {
  try {
    const crud = await Crud.findByIdAndDelete(req.params.id);
    if (!crud) {
      return res.status(404).json("crud not found");
    }
    res.json("crud deleted.");
  } catch (error) {
    res.status(400).json("Error: " + error.message);
  }
};
