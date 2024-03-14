// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const dbUrl =
  "mongodb+srv://arunramasamy46:arunramasamy46@cluster0.0efmm3f.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Routes
const crudRoutes = require("./Routes/CrudRoutes");
app.use("/cruds", crudRoutes);

const UserRoutes = require("./Routes/UserRoutes");
app.use("/", UserRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
