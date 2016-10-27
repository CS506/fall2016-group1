var blueprint = require('@onehilltech/blueprint')
  , util      = require('util')
  , User      = require ('../models/User');
  ;

function WelcomeController() {
  blueprint.BaseController.call(this);
}

blueprint.controller(WelcomeController);

WelcomeController.prototype.displayPage = function() {
  var self = this;

  return function(req, res) {
    console.log("Directing user to welcome page.");
  };
};

module.exports = exports = WelcomeController;
