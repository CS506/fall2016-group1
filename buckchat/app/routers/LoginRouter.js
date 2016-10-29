var passport = require ('passport')
  ;

module.exports = {
  '/login' : {
    get  : { view   : 'intro.pug' },
    post : {
      before : [passport.authenticate('local', {failureRedirect: '/login'})],
      action : 'LoginController@login'
    },
  },

  '/logout': {
    // handle links to logout
    get: {action: 'LoginController@logout'}
  }

};
