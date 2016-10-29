#!/usr/bin/env node

var winston       = require('winston')
  , blueprint     = require('@onehilltech/blueprint')
  , express       = require('express')
  ;

var expressApp = express();

blueprint.Application (__dirname, function (err, app) {
  if (err) throw err;

  app.start(function(err) {
    if (err) throw err;
    winston.log('info', 'application started...');
  });
});
