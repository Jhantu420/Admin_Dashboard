const express = require("express");
const router = express.Router();
const { TestingUser } = require("../models");

// POST route to create a new testing user
router.post("/", async (req, res) => {
  const { name, email, password, phoneNumber } = req.body; 
  try {
    await TestingUser.create({ 
      name: name,
      email: email,
      password: password, 
      phoneNumber: phoneNumber,
    });
    res.json("Success");
  } catch (error) {
    console.error("Error creating testing user:", error);
    res.status(500).json({ error: "Server error" });
  }
});
router.get("/", async (req, res) => {
  try {
    const TestingUsers = await TestingUser.findAll();
    res.json(TestingUsers);
  } catch (error) {
    console.error("Error fetching admin data:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// POST route for testing user login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await TestingUser.findOne({ where: { email: email } });
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
    const user = await TestingUser.findByPk(userId);

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    user.name = name;
    user.email = email;
    user.password = password;
    user.phoneNumber = phoneNumber;

    await user.save();

    res.json({ success: true, message: "Report user updated successfully" });
  } catch (error) {
    console.error("Error updating report user:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Delete a report user by ID
router.delete("/delete/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await TestingUser.findByPk(userId);

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    await user.destroy();

    res.json({ success: true, message: "Report user deleted successfully" });
  } catch (error) {
    console.error("Error deleting report user:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
