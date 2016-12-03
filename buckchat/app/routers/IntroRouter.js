module.exports = {
    // Default router to direct user to intro page.
    '/': {
        get: { action: 'IntroPageController@displayPage' }
    },

    '/login': {
        get: { action: 'IntroPageController@displayPage' },
        post: {
            // Invoke the `login` function in the controller (which itself handles authentication).
            action: 'IntroPageController@login'
        }
    },

    '/logout': {
        // handle links to logout
        get: {action: 'IntroPageController@logout'}
    },

    '/register': {
        get: { action: 'IntroPageController@displayPage' },
        post: { 
            // Invoke the 'register' function in the controller
            action: 'IntroPageController@register'},
    }
};
