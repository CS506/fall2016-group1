var passport = require('passport')
  ;

module.exports = {
  '/login' : {
    get  : { view : 'intro.pug' },
    post : {
      // Use passport to handle authentication before invoking the `login` function in the controller. 
      before : [passport.authenticate('local', {failureRedirect: '/login'})],
      action : 'IntroPageController@login'
    }
  },

  '/logout': {
    // handle links to logout
    get: {action: 'IntroPageController@logout'}
  },

  '/register' : {
    get  : { view   : 'intro.pug' },
    post : { action : 'IntroPageController@register'},
  }


};