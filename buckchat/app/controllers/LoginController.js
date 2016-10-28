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

    // passport.authenticate('local', {
    //   successRedirect: '/welcome',
    //   failureRedirect: '/failure'
    // }),
    // function(req, res) {
    //   cosole.log("Login unsure. Redirecting to root.");
    //   res.redirect('/root');
    // };

    // var me = new User({username: "zpreynol", name: "Zach", email: "zpreynol@iupui.edu", password: "test"});
    // me.save();

    // if (req.session) {
    //   console.log("SESSION FOUND!!!");
    // }

    // console.log("Session JSON: %j", req.session);

    // req.session = {user: "me"};

    // if (!req.session.user) {
    //   console.log("new user!");
    // } else {
    //   console.log("User %s visiting the site.");
    // }

    // req.session.user = req.body.username;

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
