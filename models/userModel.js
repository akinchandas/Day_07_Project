// models/userModel.js
const db = require('../db');

const User = {
  getAll: (callback) => {
    const query = 'SELECT * FROM user'; // Changed to 'info'
    db.query(query, (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  create: (userData, callback) => {
    const query = 'INSERT INTO user (uname, upass) VALUES (?, ?)'; // Changed to 'info'
    db.query(query, [userData.name, userData.pass], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results.insertId);
    });
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM user WHERE uid = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  rename: (id, newName, callback) => {
    const query = 'UPDATE user SET uname = ? WHERE uid = ?';
    db.query(query, [newName, id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },
};


module.exports = User;
