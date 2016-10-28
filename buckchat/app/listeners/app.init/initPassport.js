var passport      = require ('passport')
  , LocalStrategy = require ('passport-local').Strategy
  ;

module.exports = initPassport;

function initPassport (app) {
  var User = app.models.User;

  var opts = {usernameField: 'username', passwordField: 'password', session: true};
  passport.use (new LocalStrategy (opts, authorize));

  function authorize (username, password, done) {
    User.findOne ({ username: username }, function (err, user) {
      console.log("Authenticating user...");
      if (err) { return done (err); }
      if (!user) { return done (null, false); }
      if (user.verifyPassword (password)) { return done (null, false); }
      return done (null, user);
    });
  }
}