const express = require("express");
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());


const db = require("./models");

// Routes for Admin
const adminRouter = require('./routes/adminRoutes');
app.use("/adminroute", adminRouter);

// Routes for CreateUser
const DataPreUserRouter = require('./routes/DataPreUser');
app.use("/datapreparationuser", DataPreUserRouter);

const TrainingUserRouter = require('./routes/TrainingUser');
app.use("/traininguser", TrainingUserRouter);

const TestingUserRouter = require('./routes/TestingUser');
app.use("/testinguser", TestingUserRouter);

const ReportUserRouter = require('./routes/ReportUser');
app.use("/reportuser", ReportUserRouter);


db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server is running");
  });
});
