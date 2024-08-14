// controllers/userController.js
const User = require("../models/userModel");

const userController = {
  getAllUsers: (req, res) => {
    User.getAll((err, users) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.render("users", { users });
    });
  },

  createUser: (req, res) => {
    const { uname, upass } = req.body;
    User.create({ uname, upass }, (err, userId) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res
        .status(201)
        .redirect("/users");
    });
  },
  deleteUser: (req, res) => {
    const { uid } = req.params;
    User.delete(uid, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.redirect('/users');
    });
  },

  renameUser: (req, res) => {
    const { uid } = req.params;
    const { newName } = req.body;
    User.rename(uid, newName, (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.redirect('/users');
    });
  },
};

module.exports = userController;
