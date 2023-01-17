"use strict";
const express = require("express");
const app = express();

// define all endpoints here
app.get("/hello", function (req, res) {
  res.type("text");
  res.send("Hello World!");
});

// define endpoint for exercise 1 here
app.get("/math/circle/:r?", function (req, res) {
  res.type("text");
  const r = req.params.r;
  res.send({
    area: Math.PI * r * r,
    circumfrence: Math.PI * (2 * r),
  });
});

// define endpoint for exercise 2 here
// URLs for testing
// http://localhost:8000/hello/name/?first=elliot&last=turner
// http://localhost:8000/hello/name/?first=elliot
// http://localhost:8000/hello/name/?last=turner
// http://localhost:8000/hello/name/?
app.get("/hello/name/", function (req, res) {
  res.type("text");
  console.log(req.query);
  if (req.query.first === undefined && req.query.last === undefined) {
    res
      .type("text")
      .status(400)
      .send("Missing Required GET parameters: first, last");
  } else if (req.query.first === undefined) {
    res.type("text").status(400).send("Missing Required GET parameters: first");
  } else if (req.query.last === undefined) {
    res.type("text").status(400).send("Missing Required GET parameters: last");
  } else {
    res.send("Hello " + req.query.first + " " + req.query.last);
  }
});

app.use(express.static("public"));
const PORT = process.env.PORT || 8000;
app.listen(PORT);
