var blueprint    = require('@onehilltech/blueprint')
    , request    = require('supertest')
    , session    = require('supertest-session')
    , expect     = require('chai').expect
    , appPath    = require('../fixtures/appPath')
    , testHelper = require('../plugins/TestHelper.js')
    ;


describe('DripCreationTest', function() {

    before(function(done) {
        blueprint.testing.createApplicationAndStart(appPath, done);

    });


    describe('Create Drip', function() {

        var userSession = null;

        before(function(done) {
            // Initialize session (using supertest-session).
            userSession = session(blueprint.app.server.app);

            // Insert user test doc into the database.
            testHelper.insertUserDocs(done);
        });


        it('should loggin', function(done) {
            userSession
                .post('/login')
                .send({username: 'jjj', password: 'mypass'})
                .expect(200, done)
        });

        it('should create a drip', function(done) {
            userSession
                .post('/buckchat/create-drip')
                .send({text: 'I love the Smokies #hiking'})
                .expect(200, done)
        });
        
        it('should fail to create a drip without a hashtag', function(done) {
            userSession
                .post('/buckchat/create-drip')
                .send({text: 'I love the Smokies'})
                .expect(400, done)
        });


        after(function(done) {
            // Remove user doc from database.
            testHelper.removeUserDocs(done);
        });

    });
});