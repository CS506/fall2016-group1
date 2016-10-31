module.exports = exports = {
  '/intro' : {
    get  : { view   : 'intro.pug' },
    post : { action : 'IntroPageController@login'},
  }

  '/register' : {
    get  : { view   : 'intro.pug' },
    post : { action : 'IntroPageController@register'},
  }

};
