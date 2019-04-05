const User = require("../models/User");
const Rota = require("../models/Rota");


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
  // console.log(req.params)
  User.find({username:req.params.userName, password:req.params.password}, (err, user) => {
    console.log(user)
    if (err) {
      // res.status(500).send(err);
      console.log("res")
    } else if (user === undefined){
      console.log("User Not found")
    }
    res.send(user);
  });
};

exports.createNewRota = (req, res) => {
  let newRota = new Rota(req.body);
  console.log(req.body);
  newRota.save((err, Rota) => {
    if (err) {
      res.status(500).send(err);
    }
    res.send(Rota);
    console.log(Rota);
  });
};