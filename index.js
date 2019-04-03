const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const taskController = require("./server/controllers/Controller");

require("./server/db");

app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

//listening to port
app.listen(port, () => {
  console.log("Listening to port" + port);
});

app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT :)" });
});

app.post("/user", (req, res) => {
  
  taskController.createNewUser(req, res);
});


app.get("/user/:userName&:password", (req, res) => {
  // console.log(req)
  taskController.readUser(req, res);
});

