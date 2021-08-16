const express = require("express");

const routes = require("./routes");
const mustacheExpress = require('mustache-express');


const server = express();

server.engine('mustache', mustacheExpress());
server.set('view engine', 'mustache');

server.use(express.json());

server.use(express.static('static'));
server.use(routes);

module.exports = server;
