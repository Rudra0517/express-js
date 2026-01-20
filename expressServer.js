/*
 ! Express JS is a framework of node js
 ! it reduce the boiler plate codes.
 ! it have more inbuilt methods.
*/

const express = require("express");

const app = express();

const users = require("./data.js");

//* get method
app.get("/", (req, res) => {
  res.send("This is the get request from express.");
});

app.get("/jsonData", (req, res) => {
  res.json({ data: users });
});

//* post method
app.post("/", (req, res) => {
  res.send("POST request");
});

//* put method
app.put("/", (req, res) => {
  res.send("PUT request");
});

//* delete method
app.delete("/", (req, res) => {
  res.send("DELETE request");
});

app.listen(9090, () => {
  console.log("server is running...");
});
