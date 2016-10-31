module.exports = exports = {
  '/intro' : {
    get  : { view   : 'intro.pug' },
    post : { action : 'LoginController@login'},
  }
};
