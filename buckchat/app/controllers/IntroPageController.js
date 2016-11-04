var blueprint = require('@onehilltech/blueprint')
  , passport  = require('passport')
  ;

module.exports = IntroPageController;

function IntroPageController() {
  blueprint.BaseController.call(this);
}

blueprint.controller(IntroPageController);


/*
 * Action responsible for redirecting user to welcome page upon logging in.
 */ 
IntroPageController.prototype.login = function() {
  return function(req, res, next) {
    // Authenticate user before continuing.

    // NOTE: When using a custom callback, it is our responsibility to send a response 
    // and create the session (passportjs.org/docs#custom-callback)
    passport.authenticate('local', function(err, user, info) {
      // Check for database error
      if (err) {
        return next(err)
      }

      // Check for invalid credentials error
      if (!user) {
        // Set HTTP status to 401 Unauthorized and render view with error message.
        res.status(401);
        return res.render('intro.pug', {loginError: info.message});
      }

      // At this point, everything is valid, so log the user in.
      req.login(user, function(err) {
        if (err) {
          return next(err);
        }
        // Redirect to the welcome view.
        return res.render('welcome.pug', {name: req.user.name});
      });
    })(req, res, next);
  };
};

// Logout functionality below is copied from Blueprint.js passport authentication 
// tutorial at https://github.com/onehilltech/blueprint/wiki/Tutorials%3AAuthentication%3ASession


/*
 * Action responsible for completing the logout process. It will redirect
 * the user to the login page.
 */ 
IntroPageController.prototype.logout = function() {
  return function(req, res) {
    console.log('Logging user out.');
    req.logout();
    res.redirect('/');
  }
};


IntroPageController.prototype.register = function() {
  return function(req, res) {
  // Nothing here yet
  };
};