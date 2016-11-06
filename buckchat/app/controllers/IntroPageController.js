var blueprint = require('@onehilltech/blueprint')
  , util      = require('util')
  , User      = require ('../models/User');

module.exports = IntroPageController;

function IntroPageController() {
  blueprint.BaseController.call(this);
}

blueprint.controller(IntroPageController);


/*
 * Action responsible for redirecting user to welcome page upon logging in.
 */ 
IntroPageController.prototype.login = function() {
  return function(req, res) {
    // At this point, user is authenticated.
    // Redirect to the welcome view.
    res.render('welcome.pug', {name: req.user.name});
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
    res.redirect('/login');
  };
};


IntroPageController.prototype.register = function() {
  return function(req, res) {

    // Saving form details in local variables
    var registerEmail = req.body.email;
    var registerUsername = req.body.username;
    var registerName = req.body.name;
    var registerPassword = req.body.password;

    //Checking for user exists already or not
    User.findOne({ $or: [ { email: registerEmail }, { username: registerUsername }]},function(err,doc) {
      if(err) {
      return handleError(err);
      }

      //Indicating availability of username and email
      if(doc === null) {  
      //Assigning values to model variables  
      var user1 = new User({name: registerName,email: registerEmail,username: registerUsername,password: registerPassword});
      user1.save();
      console.log('User successfully registered');
      return res.render('welcome.pug');
      }

      //Indicating form values are present already
      return res.render('intro.pug',{registerError: 'User exists already'});
    });
  };
};
