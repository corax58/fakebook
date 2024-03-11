const express = require("express");
const upload = require("../data/fileUploader");

const { loginUser, signupUser } = require("../controllers/userController");

const router = express.Router();

// login router
router.post("/login", loginUser);

//signup
router.post("/signup", upload.single("profilePic"), signupUser);

module.exports = router;
