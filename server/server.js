require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//express app
const app = express();
const PORT = process.env.PORT;

//routers
const postRouter = require("./routes/posts");

const userRouter = require("./routes/user");

//middlewares
app.use(express.static("public/profilePictures"));
app.use(cors());
app.use(express.json());

//routes
app.use("/api/posts", postRouter);

app.use("/api/user", userRouter);

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
