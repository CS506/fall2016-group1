// var User = require ('../models/User')
  // ;

var blueprint = require ('@onehilltech/blueprint')
  ;

var User;

blueprint.messaging.on ('app.init', function (app) {
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

    session: {
      secret: 'secret',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false }  // set to true for https://
    },

    passport : { 
      session: {  
        serializer: function (user, done) {
          /* convert user model to id */ 
          console.log("serializing user.........");
          done(null, user.username);
        },
        deserializer: function (id, done) {
          /* convert id to a user model */
          console.log("deserializing user.........");
          User.findOne({ username: id }, function (err, user) {
            if (err) { return done(err); }
            done(null, user);
          });
        }
      }
    }

  }
};