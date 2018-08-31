const env = process.env.NODE_ENV;
const cluster = require('cluster');
const os = require('os');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/index');


if (cluster.isMaster) {
  for (let i = 0; i < os.cpus().length; i += 1) {
    cluster.fork();
  }

  cluster.on('exit', () => {
    cluster.fork();
  });
} else {
  const app = express();

  if (env === 'test') {
    mongoose.connect('mongodb://localhost/stocktradertest', { useNewUrlParser: true });
  }
  mongoose.connect('mongodb://localhost/stocktrader', { useNewUrlParser: true });

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use('/', routes);

  app.listen(4000);

  module.exports = app;
}
