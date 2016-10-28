var passport = require('passport')
  , User = require('../models/User')
  , LocalStrategy = require('passport-local').Strategy
  ;

passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log("Authenticating user...");
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (user.password != password) { return done(null, false); }
      return done(null, user);
    });
  }
));

// module.exports = exports = passport;


passport.serializeUser(function(user, callback) {
  callback(null, user.username);
});

passport.deserializeUser(function(username, callback) {
  User.findOne({ username: username }, function (err, user) {
    if (err) { return callback(err); }
    callback(null, user);
  });
});
