var blueprint = require('@onehilltech/blueprint')
  ;

module.exports = IntroPageController;

function IntroPageController() {
  blueprint.BaseController.call(this);
}

blueprint.controller(IntroPageController);

IntroPageController.prototype.login = function() {
  return function(req, res) {

    console.log("Proceeding with login.....");
    
    if (req.user) {
      console.log('User logged in: ' + req.user.id);
    } else {
      console.log('req.user is not defined.');
    }

    res.render('welcome.pug');
    // res.redirect('/users/' + req.user.id);
  };
};


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