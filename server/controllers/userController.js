const User = require("../models/userModel");
const upload = require("../data/fileUploader");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

//login user

const loginUser = async (req, res) => {
  const { emailOrUserName, password } = req.body;

  try {
    const user = await User.login(emailOrUserName, password);
    //create a token

    const token = createToken(user._id);

    res
      .status(200)
      .json({
        userName: user.userName,
        email: user.email,
        profilePic: user.profilePic,
        token,
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//signup user
const signupUser = async (req, res) => {
  let profilePic;
  if (!req.file) {
    profilePic = "";
  } else {
    profilePic = req.file.filename;
  }

  const { userName, email, password } = req.body;
  // validation
  console.log(profilePic);
  try {
    const user = await User.signup(profilePic, userName, email, password);

    const token = createToken(user._id);

    res.status(200).json({
      userName: user.userName,
      email: user.email,
      profilePic: user.profilePic,
      token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  signupUser,
};
