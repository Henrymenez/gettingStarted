const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 3030;

const app = express();

app.use(bodyParser.json());
app.use(cors()); 

app.get("/", (req, res) => {
  res.status(200).send("Hello from Express server");
});

app.post("/enroll", (req, res) => {
  console.log(req.body);
  res.status(200).send({ message: "Data received", data: req.body });
});

app.listen(PORT, () => {
  console.log("Server running on localhost:" + PORT);
});
