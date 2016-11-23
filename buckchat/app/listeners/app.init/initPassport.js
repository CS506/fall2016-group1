// This listener is copied from Blueprint.js passport authentication tutorial 
// at https://github.com/onehilltech/blueprint/wiki/Tutorials%3AAuthentication%3ASession

var passport        = require('passport')
    , LocalStrategy = require('passport-local').Strategy
    , winston       = require('winston')
    ;

module.exports = initPassport;

function initPassport(app) {
    var User = app.models.User;

    var opts = {
        usernameField: 'username',
        passwordField: 'password',
        session: true};
        
    passport.use(new LocalStrategy(opts, authorize));

    function authorize(username, password, done) {
        winston.debug("Authenticating user with authorize() function.");

        User.findOne({ username: username }, function(err, user) {
            if (err) {
                // DB connection issue
                winston.error(err);
                return done(err);
            }
            if (!user) {
                // No user returned -- invalid credentials
                winston.error('Invalid credentials. User does not exist.')
                return done(null, false, {message : 'Invalid credentials'});
            }
            if (user.password != password) {
                // Wrong password -- invalid credentials
                winston.error('Invalid credentials. Wrong password.')
                return done(null, false, {message : 'Invalid credentials'});
            }
            // Credentials valid
            return done(null, user);
        });
    }
}