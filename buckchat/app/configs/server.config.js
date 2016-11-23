// var User = require ('../models/User')
    // ;

var blueprint = require('@onehilltech/blueprint')
    , winston = require('winston')
    ;

var User;

blueprint.messaging.on('app.init', function (app) {
    User = app.models.User;
});

module.exports = {
    protocols : {
        http : {
            port: 5000
        }
    },

    middleware : {
        validator  : { },

        bodyParser : {
            urlencoded : { extended: false },
            json : { }
        },

        morgan: {
            format: 'dev',
            immediate: true
        },

        // session and passport sections based off of Blueprint.js tutorial at 
        // https://github.com/onehilltech/blueprint/wiki/Tutorials%3AAuthentication%3ASession

        session: {
            secret: 'secret',
            resave: false,
            saveUninitialized: true,
            cookie: { secure: false }
        },

        passport : {
            session: {  
                serializer: function(user, done) {
                    /* convert user model to id */ 
                    winston.debug("Serializing user.");
                    done(null, user.username);
                },
                deserializer: function(id, done) {
                    /* convert id to a user model */
                    winston.debug("Deserializing user.");
                    User.findOne({ username: id }, function (err, user) {
                        if (err) {
                            return done(err);
                        }
                        done(null, user);
                    });
                }
            }
        } // end passport

    } // end middleware
};