"use strict";

var express = require('express');
var app = express();
var PORT = 3000;
app.get('/', function (req, res) {
  res.send('¡Hola Mundo!');
});
app.listen(PORT, function () {
  console.log("Servidor corriendo en http://localhost:".concat(PORT));
});