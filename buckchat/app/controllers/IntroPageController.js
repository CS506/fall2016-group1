var blueprint   = require('@onehilltech/blueprint')
    , passport  = require('passport')
    , winston   = require('winston')
    , User      = require ('../models/User')
    ;

module.exports = IntroPageController;

function IntroPageController() {
    blueprint.BaseController.call(this);
}

blueprint.controller(IntroPageController);

/*
 * Action responsible for displaying the intro page.
 */ 
IntroPageController.prototype.displayPage = function() {
    return function(req, res, next) {
        // if user is already authenticated, redirect to home page.
        if (req.isAuthenticated()) {
            winston.debug('Already authenticated. Redirecting to home page.');
            return res.redirect('buckchat/home');
        }

        // If not, display the intro page.
        return res.render('intro.pug');
    };
};


/*
 * Action responsible for redirecting user to home page upon logging in.
 */ 
IntroPageController.prototype.login = function() {
    return function(req, res, next) {
        // Authenticate user before continuing.

        // NOTE: When using a custom callback, it is our responsibility to send a response 
        // and create the session (passportjs.org/docs#custom-callback)
        passport.authenticate('local', function(err, user, info) {
            if (err) {
                // Database error: send status code 500 Internal Server Error.
                return handleError(res, err, 500);
            }

            // Check for invalid credentials error
            if (!user) {
                // Set HTTP status to 401 Unauthorized and render view with error message.
                res.status(401);
                return res.render('intro.pug', {loginError: info.message});
            }

            // At this point, everything is valid, so log the user in.
            req.login(user, function(err) {
                if (err) {
                    return next(err);
                }
                // Redirect to the home view.
                return res.redirect('buckchat/home');
            });
        })(req, res, next);
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
        winston.debug('Logging user out.');
        req.logout();
        res.redirect('/');
    }
};

/*
 * Action responsible for creating an account for the user given the form fields.
 */ 
IntroPageController.prototype.register = function() {
    return function(req, res) {

        // Saving form details in local variables
        var registerEmail = req.body.email;
        var registerUsername = req.body.username;
        var registerName = req.body.name;
        var registerPassword = req.body.password;

        // Checking for user exists already or not
        User.findOne({ $or: [ { email: registerEmail }, { username: registerUsername }]}, function(err, doc) {
            if (err) {
                // Database error: send status code 500 Internal Server Error.
                return handleError(res, err, 500);
            }

            // Username and email are available -- no error.
            if (doc === null) {
                // Assigning values to model variables  
                var user = new User({name: registerName, email: registerEmail, username: registerUsername, password: registerPassword});

                // Validating with respect to model schema
                user.validate(function(err) {
                    if (err) {
                        // Send status code 400 Bad Request.
                        res.status(400);
                        return res.render('intro.pug', {registerError: err});
                    } else {
                        // Save the user's information into the database
                        user.save();
                        return res.render('intro.pug', {successMessage: 'User registration successfull! Now login with your credentials above.'});
                    }
                });
            }

            // Username or email already taken -- error!
            else {
                // Send status code 409 Conflict.
                res.status(409);
                return res.render('intro.pug', {registerError: 'User exists already'});
            }
        });
    };
};
