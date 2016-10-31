// This listener is copied from Blueprint.js passport authentication tutorial 
// at https://github.com/onehilltech/blueprint/wiki/Tutorials%3AAuthentication%3ASession

var passport      = require ('passport')
  , LocalStrategy = require ('passport-local').Strategy
  ;

module.exports = initPassport;

function initPassport (app) {
  var User = app.models.User;

  var opts = {usernameField: 'username', passwordField: 'password', session: true};
  passport.use (new LocalStrategy (opts, authorize));

  function authorize (username, password, done) {
    console.log("Authenticating user....");
    User.findOne ({ username: username }, function (err, user) {
      if (err) { return done (err); }
      if (!user) { return done (null, false); }
      if (user.password != password) { return done (null, false); }
      return done (null, user);
    });
  }
}