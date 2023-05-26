const express = require("express");
const morgan = require("morgan");
const router = require("./routes/index");

const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use(router);

server.use("*", (req, res) => {
  res.status(404).send("Not found");
});
server.use("*", (err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    error: true,
    message: err.message,
  });
});

module.exports = server;
