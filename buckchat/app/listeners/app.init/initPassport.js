// This listener is copied from Blueprint.js passport authentication tutorial 
// at https://github.com/onehilltech/blueprint/wiki/Tutorials%3AAuthentication%3ASession

var passport      = require('passport')
    , LocalStrategy = require('passport-local').Strategy
    ;

module.exports = initPassport;

function initPassport(app) {
    var User = app.models.User;

    var opts = {
        usernameField: 'username',
        passwordField: 'password',
        session: true};
        
    passport.use (new LocalStrategy (opts, authorize));

    function authorize(username, password, done) {
        console.log("Authenticating user....");
        User.findOne ({ username: username }, function (err, user) {
            if (err) {
                // DB connection issue
                return done (err);
            }
            if (!user) {
                // No user returned -- invalid credentials
                return done (null, false, {message : 'Invalid credentials'});
            }
            if (user.password != password) {
                // Wrong password -- invalid credentials
                return done (null, false, {message : 'Invalid credentials'});
            }
            // Credentials valid
            return done (null, user);
        });
    }
}