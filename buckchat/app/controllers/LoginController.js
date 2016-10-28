var blueprint = require('@onehilltech/blueprint')
  , util      = require('util')
  , User      = require ('../models/User')
  // , passport  = require('../plugins/auth')
  // , passport  = require('passport')
  ;

function IntroPageController() {
  blueprint.BaseController.call(this);
}

blueprint.controller(IntroPageController);

IntroPageController.prototype.login = function() {
  var self = this;

  return function(req, res) {

    console.log("Login successful?!");
    console.log('User logged in: ' + req.user.id);
    // res.redirect('/users/' + req.user.id);
  };
};

module.exports = exports = IntroPageController;
