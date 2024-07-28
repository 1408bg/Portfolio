const path = require('path');
const express = require("express");
const app = express();

const root = path.join(__dirname, "../src/");

app.get("/", (req, res) => {
  res.sendFile(root + "/root.html");
});

app.get("/:path", (req, res) => {
  const filepath = req.params.path;
  res.sendFile(root + `/${filepath}`);
});

app.get("/component/:path", (req, res) => {
  const filepath = req.params.path;
  res.sendFile(root + `/component/${filepath}`);
})

app.listen(5500);