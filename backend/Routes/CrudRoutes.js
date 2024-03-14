// routes/crudRoutes.js
const express = require("express");
const router = express.Router();
const crudController = require("../Controllers/CrudController");

// Create crud
router.post("/add", crudController.createcrud);

// Get all cruds
router.get("/", crudController.getAllcruds);

// Get crud by ID
router.get("/:id", crudController.getcrudById);

// Update crud by ID
router.put("/update/:id", crudController.updatecrudById);

// Delete crud by ID
router.delete("/:id", crudController.deletecrudById);

module.exports = router;
