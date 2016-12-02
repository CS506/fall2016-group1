module.exports = exports = {
    '/home' : {
        get : { action : 'HomeController@displayPage'}
    },

    '/create-drip' : {
        post : { action : 'HomeController@createDrip'}
    },

    '/showDrip' : {
        post : { action : 'HomeController@showDrip'}
    }
};
