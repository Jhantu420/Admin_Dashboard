const { Admin } = require("../models");

const checkAdminAccess = (req, res, next) => {
  const { email, password, role, subrole } = req.body;

  // Check if the role is "admin" and subrole is one of the allowed values
  if (
    role === "admin" &&
    (subrole === "datapre" ||
      subrole === "training" ||
      subrole === "testing" ||
      subrole === "super")
  ) {
    // Implement your email and password validation logic here
    if (isValidEmailAndPassword(email, password)) {
      next(); // Allow access to the route
    } else {
      res
        .status(401)
        .json({ error: "Unauthorized - Invalid email or password" });
    }
  } else {
    res.status(403).json({ error: "Access denied" }); // Return an error if conditions are not met
  }
};

// Function to validate email and password (replace with your validation logic)
async function isValidEmailAndPassword(email, password) {
  try {
    // Look for an admin with the provided email in the database
    const admin = await Admin.findOne({ where: { email } });

    if (admin) {
      // You should use a secure method like bcrypt to compare the hashed password
      // For simplicity, we're using plain text password comparison here.
      if (admin.password === password) {
        return true; // Email and password are valid
      }
    }
  } catch (error) {
    // Handle any database errors here
    console.error("Error while validating email and password:", error);
  }

  return false; // Invalid email or password
}

