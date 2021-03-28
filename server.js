require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").createServer(app);

const port = process.env.PORT || 4000;

app.use(
  bodyParser.json({
    limit: 30000000,
  })
);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use(function (err, req, res, next) {
  console.error(err.message);
  res.status(500).send({ error: err.message });
});

server.listen(port, () =>
  console.log("App running on " + port + " " + process.env.NODE_ENV)
);
