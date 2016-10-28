#!/usr/bin/env node

var winston       = require('winston')
  , blueprint     = require('@onehilltech/blueprint')
  , cookieParser  = require('cookie-parser')
  , cookieSession = require('cookie-session')
  , express       = require('express')
  , passport      = require('passport-local')
  ;

var expressApp = express();

blueprint.Application (__dirname, function (err, app) {
  if (err) throw err;

  app.start(function(err) {
    if (err) throw err;
    winston.log('info', 'application started...');
  });
});
