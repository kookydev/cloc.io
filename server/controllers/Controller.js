const User = require("../models/User");

exports.createNewUser = (req, res) => {
  let newUser = new User(req.body);
  console.log(req.body);
  newUser.save((err, User) => {
    if (err) {
      res.status(500).send(err);
    }
    res.send(User);
    console.log(User);
  });

};

exports.readUser = (req, res) => {
  User.findById(req.params.userid, (err, board) => {
    if (err) {
      res.status(500).send(err);
    }
    res.send(user);
  });
};