const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const mongojs = require("mongojs");
const logger = require("morgan");
const request = require("request");
const mongoose = require("mongoose");
const routes = require('./src/routes')

var db =require("./src/models");



app.use(routes);

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

var MONGODB_URI=process.env.MONGODB_URI || "mongodb://localhost/NPRreact";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, ["article"]);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
