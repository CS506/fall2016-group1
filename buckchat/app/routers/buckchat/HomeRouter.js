module.exports = exports = {
    '/home' : {
        get : { action : 'HomeController@displayPage'}
    },

    '/create-drip' : {
        post : { action : 'HomeController@createDrip'}
    }
};