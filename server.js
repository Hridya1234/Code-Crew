// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// Create an Express app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());               // Allow cross-origin requests
app.use(bodyParser.json());    // Parse incoming JSON requests

// MongoDB connection (Updated to remove deprecated options)
mongoose
  .connect("mongodb://localhost:27017/hackathon")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Mongoose Schema and Model for 'User'
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", UserSchema);

// API Routes

// Create a new user
app.post("/add-user", async (req, res) => {
  try {
    const user = new User(req.body);  // Create a new user with the request data
    await user.save();                // Save the user to MongoDB
    res.status(201).send("User added successfully!");
  } catch (err) {
    res.status(500).send("Error saving user: " + err);
  }
});

// Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find(); // Retrieve all users from the database
    res.json(users);                 // Send the users as JSON response
  } catch (err) {
    res.status(500).send("Error retrieving users: " + err);
  }
});

// Get a specific user by ID
app.get("/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);  // Find user by ID
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.json(user);  // Send the user data as JSON
  } catch (err) {
    res.status(500).send("Error retrieving user: " + err);
  }
});

// Update a user by ID
app.put("/user/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).send("User not found");
    }
    res.json(updatedUser); // Send the updated user data
  } catch (err) {
    res.status(500).send("Error updating user: " + err);
  }
});

// Delete a user by ID
app.delete("/user/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);  // Delete user by ID
    if (!deletedUser) {
      return res.status(404).send("User not found");
    }
    res.send("User deleted successfully");
  } catch (err) {
    res.status(500).send("Error deleting user: " + err);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
