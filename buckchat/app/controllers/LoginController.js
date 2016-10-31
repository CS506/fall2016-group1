var blueprint = require('@onehilltech/blueprint')
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
  return function(req, res) {
    // At this point, user is authenticated.
    // Redirect to the welcome view.
    res.render('welcome.pug');
  };
};

// Logout functionality below is copied from Blueprint.js passport authentication 
// tutorial at https://github.com/onehilltech/blueprint/wiki/Tutorials%3AAuthentication%3ASession

/*
 * Action responsible for completing the logout process. It will redirect
 * the user to the login page.
 */ 
IntroPageController.prototype.logout = function () {
  return function (req, res) {
    console.log('Logging user out.');
    req.logout ();
    res.redirect ('/login');
  }
};