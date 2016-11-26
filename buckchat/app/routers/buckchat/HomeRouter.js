module.exports = exports = {
    '/home' : {
        get : { action : 'HomeController@displayPage'}
    },

    '/home' : {
        get : { action : 'HomeController@bucketList'}
    },

    '/create-drip' : {
        post : { action : 'HomeController@createDrip'}
    }
};
