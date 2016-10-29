var blueprint = require('@onehilltech/blueprint')
  ;

module.exports = IntroPageController;

function IntroPageController() {
  blueprint.BaseController.call(this);
}

blueprint.controller(IntroPageController);

IntroPageController.prototype.login = function() {
  return function(req, res) {

    console.log("Login successful?!");
    console.log('User logged in: ' + req.user.id);
    // res.redirect('/users/' + req.user.id);
  };
};


/*
 * Action responsible for completing the logout process. It will redirect
 * the user to the login page.
 */ 
IntroPageController.prototype.logout = function () {
  return function (req, res) {
    req.logout ();
    res.redirect ('/login');
  }
};