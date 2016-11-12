var blueprint   = require('@onehilltech/blueprint')
    , passport  = require('passport')
    , User      = require ('../models/User')
    , errors = require('validator')
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
    return function(req, res, next) {
        // Authenticate user before continuing.

        // NOTE: When using a custom callback, it is our responsibility to send a response 
        // and create the session (passportjs.org/docs#custom-callback)
        passport.authenticate('local', function(err, user, info) {
            // Check for database error
            if (err) {
                return next(err)
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
                // Redirect to the welcome view.
                return res.render('welcome.pug', {name: req.user.name});
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
        console.log('Logging user out.');
        req.logout();
        res.redirect('/');
    }
};


IntroPageController.prototype.register = function() {
    return function(req, res) {

        // Saving form details in local variables
        var registerEmail = req.body.email;
        var registerUsername = req.body.username;
        var registerName = req.body.name;
        var registerPassword = req.body.password;

        // Checking for user exists already or not
        User.findOne({ $or: [ { email: registerEmail }, { username: registerUsername }]}, function(err, doc) {
            // Error Handling
            if (err) {
                return handleError(err);
            }

            // Indicating availability of username and email
            if (doc === null) {
                // Assigning values to model variables  
                var user1 = new User({name: registerName, email: registerEmail, username: registerUsername, password: registerPassword});

                // Validating with respect to model schema
                user1.validate(function(error) {
                    if (error) {
                        return res.render('intro.pug', {registerError: error});
                    } else {
                        user1.save();
                        return res.render('intro.pug', {successMessage: 'User registration successfull! Now login with your credentials above.'});
                    }
                });
            }

            // Indicating form values are present already
            else {
                return res.render('intro.pug', {registerError: 'User exists already'});
            }
        });
    };
};