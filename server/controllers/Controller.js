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
  User.find(
    { username: req.params.userName, password: req.params.password },
    (err, user) => {
      if (err) {
        // res.status(500).send(err);
        console.log("res");
      } else if (user === undefined) {
        console.log("User Not found");
      }
      res.send(user);
    }
  );
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

exports.clockIn = (req, res) => {
  console.log(req.params.username);
  Rota.findOneAndUpdate(
    { username: req.params.username },
    req.body,
    { in_time: req.params.in_time },
    (err, rota) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).send(rota);
      console.log("Clocked In");
    }
  );
};

// exports.updateBoard = (req, res) => {
//   Board.findOneAndUpdate({ _id: req.params.boardid }, req.body, { new: true },
//     (err, task) => {
//       if (err) {
//         res.status(500).send(err);
//       }
//       res.status(200).json(task)
//       console.log("Board Updated");
//     }
//   );
//  }
