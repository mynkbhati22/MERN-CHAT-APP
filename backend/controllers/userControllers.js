const asyncHandler = require("express-async-handler");
const generateToken = require("../config/generateTokens");
const User = require("../models/userSchema");

const userSignup = asyncHandler(async (req, res) => {
  try {
    const { name, email, password, porfilepicture } = req.body;
    if (!name || !email || !password || !porfilepicture) {
      res.status(400).send("Please Enter The All Feilds");
      throw new Error("Please Enter The All Feilds");
    } else {
      const userExist = await User.findOne({ email: email });
      if (userExist) {
        res.status(11000).send("User Already Exist");
        throw new Error("User Already Exist");
      } else {
        const newUser = await User.create({
          name: name,
          email: email,
          password: password,
          porfilepicture: porfilepicture,
        });
        if (newUser) {
          res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            password: newUser.password,
            porfilepicture: newUser.porfilepicture,
            token: generateToken(newUser._id),
          });
          console.log("able to add user in database", newUser);
        } else {
          res.status(400).send("Failed to create user");
          throw new Error("Failed to create user");
        }
      }
    }
  } catch (error) {
    console.log("not able to run api of signup from backend:", error);
  }
});

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      porfilepicture: user.porfilepicture,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).send("Invalid Email or Password");
    throw new Error("Invalid Email or Password");
  }
});

module.exports = { userSignup, userLogin };
