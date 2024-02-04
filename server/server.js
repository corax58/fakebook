require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

//express app
const app = express();
const PORT = process.env.PORT;

//routers
const postRouter = require("./routes/posts");

//middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/posts", postRouter);

//connect to db

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("database connection successfull");

    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//listening for requests
