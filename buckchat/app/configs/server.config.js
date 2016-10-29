var User = require ('../models/User')
  ;


module.exports = exports = {
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
      saveUninitialized: true
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