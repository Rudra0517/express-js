const express = require("express");

const app = express();


const users = require("./data.js");

// app.get(PATH, CONTROLLER)

app.get("/", (req, res) => {
  res.send("This is the get request from express.");
});

app.get("/jsonData", (req, res) => {
  res.json({ data: users });
});

app.listen(9090, () => {
  console.log("server is running...");
});

/*

! TASK
app.post()
app.put()
app.delete()

*/
