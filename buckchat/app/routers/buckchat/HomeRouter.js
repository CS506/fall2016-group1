module.exports = exports = {
    '/home' : {
        get : { action : 'HomeController@displayPage'}
    },

    '/create-drip' : {
        post : { action : 'HomeController@createDrip'}
    },

    '/show-drip' : {
        post : { action : 'HomeController@showDrip'}
    }
};
