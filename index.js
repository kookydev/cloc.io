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

app.post("/createuser", (req, res) => {
  console.log('test1')
  taskController.createNewUser(req, res);
});


app.get("/createuser/:userName&:password", (req, res) => {
  console.log('test2')
  taskController.readUser(req, res);
});

// app.use('/static', express.static(path.join(__dirname, './client/build//static')));

app.get('*', (req, res, next) => {
 res.sendFile('/index.html')
});

