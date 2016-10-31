module.exports = exports = {
  '/welcome' : {
    get  : { view   : 'welcome.pug' },
    post : { action : 'WelcomeController@displayPage'},
  }
};
