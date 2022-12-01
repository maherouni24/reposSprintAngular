const jwt = require("jsonwebtoken");
require("dotenv").config();
const expressJwt = require("express-jwt");
const Models = require("./../models");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

const User = Models.User;

exports.signup = async (req, res) => {
  const userExistsEmail = await User.findOne({
    where: { email: req.body.email },
  });
  const userExistsUsername = await User.findOne({
    where: { username: req.body.username },
  });
  if (userExistsEmail)
    return res.status(403).json({
      error: "User with this Email already exists !",
    });
  if (userExistsUsername)
    return res.status(403).json({
      error: "User with this Username already exists !",
    });
  const salt = await bcrypt.genSalt(10);
  var new_user = {
    username: req.body.username,
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    role: req.body.role,
   password: await bcrypt.hash(req.body.password, salt),
    sold : 100000,
  };
  created_user = await User.create(new_user);
  res.status(200).json({ message: "You have successfully signed up !" });
};

exports.signin = async (req, res) => {
  // find the user based on username
  const { username, password } = req.body;

  await User.findOne({ where: { username: username } }).then(async (user) => {
    if (!user) {
      return res.status(401).json({
        error: "User with that username does not exist. please signup.",
      });
    }
    const password_valid = await bcrypt.compare(password, user.password);
    if (!password_valid) {
      return res.status(401).json({
        error: "Wrong password ! ",
      });
    }

    // generate a token with user id and secret
    const token = jwt.sign(
      { exp: Math.floor(Date.now() / 1000) + 12 * 60 * 60, _id: user._id },
      process.env.JWT_SECRET
    );

    // persis the toke as 't' in cookie with expiry date
    res.cookie("t", token, { httpOnly: true });
    // return response with user and token to frontend client
    const { username, email, first_name, last_name, role } = user;
    return res.json({
      token: token,
      user: { username, email, first_name, last_name, role },
      message: "Signin succesfully !",
    });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("t");
  return res.json({ message: "You have successfully signed out!" });
};

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  userProperty: "auth",
});
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "oussema.dardouri@esprit.tn",
    pass: "E09943429", // naturally, replace both with your real credentials or an application-specific password
  },
});
exports.forgetPass = async (req, res) => {
  const userExistsEmail = await User.findOne({
    where: { email: req.body.email },
  });
  if (!userExistsEmail)
    return res.status(403).json({
      error: "User with this Email already exists !",
    });
    let num = ''
        while (num.length < 8 ) {
    num += Math.floor(Math.random() * 10)}
  const salt = await bcrypt.genSalt(10);
  await userExistsEmail.update({ password : await bcrypt.hash(num, salt) });
  const mailOptions = {
    from: "oussema.dardouri@esprit.tn",
    to: req.body.email,
    subject: "Forget password",
    text: "New Password :"+num,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  userExistsEmail
    .save()
    .then((rec) => {
      res
        .status(200)
        .json({ message: "update Pass", rec });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
};
