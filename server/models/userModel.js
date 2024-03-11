const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
  },
});

//static signup method

const validateUserName = (userName) => {
  var regex = /^[a-zA-Z0-9]+$/;

  // Test the string against the regular expression
  return regex.test(userName);
};

userSchema.statics.signup = async function (
  profilePic,
  userName,
  email,
  password
) {
  if (!email || !password || !userName) {
    throw Error(" all fields must be filled");
  }

  const validUserName = validateUserName(userName);

  if (!validUserName) {
    throw Error(
      "Please dont include whitespaces nor special characters in the user name"
    );
  }

  if (!validator.isEmail(email)) {
    throw Error("Invalid email");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("weak Password");
  }

  const emailExists = await this.findOne({ email });
  const userNameExists = await this.findOne({ userName });

  if (emailExists) {
    throw Error("Email already in use");
  }
  if (userNameExists) {
    throw Error("User Name already in use pick a diffrent one");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    userName,
    email,
    password: hash,
    profilePic,
  });
  return user;
};

//static login

userSchema.statics.login = async function (emailOrUserName, password) {
  let user = null;

  if (!emailOrUserName || !password) {
    throw Error(" all fields must be filled");
  }

  if (validator.isEmail(emailOrUserName)) {
    user = await this.findOne({ email: emailOrUserName });
  } else {
    user = await this.findOne({ userName: emailOrUserName });
  }

  if (!user) {
    throw Error("There  is no user with this user name or email ");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
