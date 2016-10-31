var passport = require('passport')
  ;

module.exports = {
  '/login' : {
    get  : { view : 'intro.pug' },
    post : {
      // Use passport to handle authentication before invoking the `login` function in the controller. 
      before : [passport.authenticate('local', {failureRedirect: '/login'})],
      action : 'LoginController@login'
    }
  },

  '/logout': {
    // handle links to logout
    get: {action: 'LoginController@logout'}
  }

};