const express = require("express");
const router = express.Router();
const { Admin } = require("../models");


// POST route to create a new admin
router.post("/admin", async (req, res) => {
  try {
    const { email, password, role, subrole } = req.body;
    await Admin.create({
      email: email,
      password: password,
      role: role,
      subrole: subrole,
    });
    res.json("Success");
  } catch (error) {
    console.error("Error creating admin:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// login route for Admin
router.post("/login", async (req, res) => {
  const { email, password, role, subrole } = req.body;
  try {
    const user = await Admin.findOne({ where: { email: email } });
    if (!user) {
      res.json({ error: "Admin doesn't exist" });
      return;
    }
    if (user.password !== password) {
      res.json({ error: "Wrong username and password" });
      return;
    }
    if (user.role !== "admin") {
      res.json({ error: "This is not an Admin" });
      return;
    }
    if (!["datapre", "training", "testing", "report", "super"].includes(user.subrole)) {
      res.json({ error: "Not a correct Admin" });
      return;
    }    
    res.json({ success: true, message: "Login successfully", subrole: user.subrole });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
