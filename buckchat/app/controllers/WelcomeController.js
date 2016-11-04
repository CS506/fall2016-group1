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
    return res.render('welcome.pug', {name: req.user.name});
  };
};

module.exports = exports = WelcomeController;
