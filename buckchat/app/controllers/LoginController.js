var blueprint = require('@onehilltech/blueprint')
  , util      = require('util')
  , User      = require ('../models/User');
  ;

function IntroPageController() {
  blueprint.BaseController.call(this);
}

blueprint.controller(IntroPageController);

IntroPageController.prototype.login = function() {
  var self = this;

  return function(req, res) {
    // Query database for a match
    User.findOne({username: req.body.username, password: req.body.password}, 'name', function (err, user) {
      if (err) {
        // Unknown error occurred
        return handleError(err);
      }
      if (user === null) {
        // No match - invalid credentials
        // Render intro page view with error message
        return res.render('intro.pug', {error: 'Invalid credentials'});
      }

      // Match found - log the user in
      return res.render('welcome.pug');
    })
  };
};

module.exports = exports = IntroPageController;
