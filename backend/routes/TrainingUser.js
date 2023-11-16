const express = require("express");
const router = express.Router();
const { TrainingUser } = require("../models");

// POST route to create a new training user
router.post("/", async (req, res) => {
  const { name, email, password, phoneNumber } = req.body; 
  try {
    await TrainingUser.create({ 
      name: name,
      email: email,
      password: password, 
      phoneNumber: phoneNumber,
    });
    res.json("Success");
  } catch (error) {
    console.error("Error creating training user:", error);
    res.status(500).json({ error: "Server error" });
  }
});
router.get("/", async (req, res) => {
  try {
    const TrainingUsers = await TrainingUser.findAll();
    res.json(TrainingUsers);
  } catch (error) {
    console.error("Error fetching admin data:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// POST route for training user login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await TrainingUser.findOne({ where: { email: email } });
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

// Update a report user by ID
router.put("/update/:id", async (req, res) => {
  const userId = req.params.id;
  const { name, email, password, phoneNumber } = req.body;

  try {
    const user = await TrainingUser.findByPk(userId);

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    user.name = name;
    user.email = email;
    user.password = password;
    user.phoneNumber = phoneNumber;

    await user.save();

    res.json({ success: true, message: "Training user updated successfully" });
  } catch (error) {
    console.error("Error updating Training user:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Delete a report user by ID
router.delete("/delete/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await TrainingUser.findByPk(userId);

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    await user.destroy();

    res.json({ success: true, message: "Training user deleted successfully" });
  } catch (error) {
    console.error("Error deleting Training user:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
