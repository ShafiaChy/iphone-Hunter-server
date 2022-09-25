const express = require("express");
const cors = require("cors");
const data = require("./data.json"); //importing data from json file
const port = process.env.PORT || 5000;

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//load all the data

app.get("/phones", async (req, res) => {
  res.send(data);
});

//load single data
app.get("/phones/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const singleData = data.find((d) => d.id === id);
  res.send(singleData);
});

app.get("/", (req, res) => {
  res.send("iphone Hunter Server is running");
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
