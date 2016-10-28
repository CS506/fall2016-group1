var passport = require ('passport')
  ;

module.exports = exports = {
  '/login' : {
    get  : { view   : 'intro.pug' },
    post : {
      before: [passport.authenticate('local', {failureRedirect: '/login'})],
      action : 'LoginController@login'
    },
  }
};
