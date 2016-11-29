var User = require('../../app/models/User.js')
var Drip = require('../../app/models/Drip.js')
    ;

/*
 * HELPER FUNCTIONS FOR TEST CASES
 * 
 * These are helper functions below that involve cleanup work with the database.
 * Your test cases may call these functions before/after test cases as needed.
 */

module.exports.insertUserDocs = function(done) {
    // Insert a test user document in the database.
    var user = new User({name: 'joe', email: 'j@gmail.com', username: 'jjj', password: 'mypass'});
    user.save(function() {
        done();
    });
}

module.exports.removeUserDocs = function(done) {
    // Remove all test user documents in the database.
    User.find({ $or: [ { name: 'joe' }, { name: 'raghavendran' }]}).remove(function(err) {
        done();
    });
}

module.exports.removeDrips = function() {
    args = arguments;
    // Remove all test drips in the database.
    Drip.find({"text": /TEST:/}).remove(function(err) {
        // If callback argument was supplied, invoke it.
        if (args.length > 0) {
            args[0]();
        }
    });
}