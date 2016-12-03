// Functionality below is copied from Blueprint.js passport authentication tutorial 
// at https://github.com/onehilltech/blueprint/wiki/Tutorials%3AAuthentication%3ASession

function isLoggedIn(req, res, next) {
    // if user is authenticated, carry on
    if (req.isAuthenticated()) {
        return next();
    }
    // If not, redirect to the intro page
    res.redirect('/');
}

// Restrict routes in the `buckchat` directory to logged in users only. 
module.exports = {
    '/buckchat': { use: isLoggedIn }
};
