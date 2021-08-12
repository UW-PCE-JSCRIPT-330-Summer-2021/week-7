const express = require("express");
const mustacheExpress = require('mustache-express');
const routes = require("./routes");

const server = express();
server.engine('mustache', mustacheExpress());
server.set('view engine', 'mustache');

server.use(express.json());
server.use(routes);
server.use(express.static('static'));

module.exports = server;
