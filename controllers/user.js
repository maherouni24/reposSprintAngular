const Models = require("./../models");
const User = Models.User;
const _ = require("lodash");

exports.userByUsername = (req, res, next, username) => {
  User.findOne({ where: { username: username } }).then((user) => {
    if (!user) {
      return res.status(400).json({
        error: "Failed to load user: " + username,
      });
    }
    req.profile = user;
    next();
  });
};

exports.getUser = (req, res) => {
  req.profile.password = undefined;
  return res.json(req.profile);
};

exports.deleteUser = async (req, res, next) => {
  let user = req.profile;
  user
    .destroy()
    .then(() => {
      res.json({ message: "User deleted successfully" });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
};
exports.updateUser = async (req, res) => {
  let user = req.profile;
  user
    .update(req.body)
    .then((user) => {
      res.json({ message: "User updated successfully", user });
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
};
