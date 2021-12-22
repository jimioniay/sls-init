const serverless = require("serverless-http");
const express = require("express");

const { users } = require("./routes")
const app = express();

app.use("/users",users);

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
