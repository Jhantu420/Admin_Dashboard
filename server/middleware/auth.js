
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const secretKey = process.env.SECRET_KEY;

// const decodeTokenMiddleware =  (req, res, next) => {
//   try {
//     const token =
//       req.headers.authorization && req.headers.authorization.split(" ")[1];

//     if (!token) {
//       console.log("No token found in the headers.");
//       return res.status(401).json({ error: "Missing token" });
//     }

//     const decodedToken = jwt.verify(token, secretKey);
//     console.log("Decoded Token:", decodedToken);
//     req.tokenPayload = decodedToken;

//     next();
//   } catch (error) {
//     console.error(error);
//     res.status(401).json({ error: "Invalid token" });
//   }
// };

// module.exports = decodeTokenMiddleware;