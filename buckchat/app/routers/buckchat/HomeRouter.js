module.exports = exports = {
    '/home' : {
        get : { action : 'HomeController@displayPage'}
    },

    '/bucketList' : {
        post : { action : 'HomeController@bucketList'}
    },

    '/create-drip' : {
        post : { action : 'HomeController@createDrip'}
    },

    '/showDrip' : {
        post : { action : 'HomeController@showDrip'}
    }
};
