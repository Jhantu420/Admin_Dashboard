const express = require("express");
const router = express.Router();
const { DataPreUser } = require("../models");

// POST route to create a new data preparation user
router.post("/", async (req, res) => {
  const { name, email, password, phoneNumber } = req.body; 
  try {
    await DataPreUser.create({ 
      name: name,
      email: email,
      password: password, 
      phoneNumber: phoneNumber,
    });
    res.json("Success");
  } catch (error) {
    console.error("Error creating dataPreparation user:", error);
    res.status(500).json({ error: "Server error" });
  }
});

//Get request for users
router.get("/", async (req, res) => {
  try {
    const DataPreUsers = await DataPreUser.findAll();
    res.json(DataPreUsers);
  } catch (error) {
    console.error("Error fetching admin data:", error);
    res.status(500).json({ error: "Server error" });
  }
});
// POST route for data preparation user login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await DataPreUser.findOne({ where: { email: email } });
    if (!user) {
      res.json({ error: "User doesn't exist" });
      return;
    }
    if (user.password !== password) {
      res.json({ error: "Wrong email and password" });
      return;
    }
    res.json({ success: true, message: "Login successfully" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// PUT route to update a data preparation user by ID
router.put("/update/:id", async (req, res) => {
  const userId = req.params.id;
  const { name, email, password, phoneNumber } = req.body;

  try {
    // Find the user by ID
    const user = await DataPreUser.findByPk(userId);

    if (!user) {
      // User not found
      res.status(404).json({ error: "User not found" });
      return;
    }

    // Update user data
    user.name = name;
    user.email = email;
    user.password = password;
    user.phoneNumber = phoneNumber;

    // Save the updated user
    await user.save();

    res.json({ success: true, message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating dataPreparation user:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE route to delete a data preparation user by ID
router.delete("/delete/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    // Find the user by ID
    const user = await DataPreUser.findByPk(userId);

    if (!user) {
      // User not found
      res.status(404).json({ error: "User not found" });
      return;
    }

    // Delete the user
    await user.destroy();

    res.json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting dataPreparation user:", error);
    res.status(500).json({ error: "Server error" });
  }
});


module.exports = router;






