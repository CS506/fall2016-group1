module.exports = {
    '/login' : {
        get  : { view : 'intro.pug' },
        post : {
            // Invoke the `login` function in the controller (which itself handles authentication).
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