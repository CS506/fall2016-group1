var blueprint    = require('@onehilltech/blueprint')
    , request    = require('supertest')
    , session    = require('supertest-session')
    , expect     = require('chai').expect
    , appPath    = require('../fixtures/appPath')
    , testHelper = require('../fixtures/TestHelper.js')
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


        it('should login', function(done) {
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

        it('should create a drip and save in multiple buckets', function(done) {
            userSession
                .post('/buckchat/create-drip')
                .send({text: 'I love the Smokies #hiking #playing'})
                .expect(200, done)
        });

        it('should create a drip if there is a hashtag followed by a valid bucket name and empty hashtag', function(done) {
            userSession
                .post('/buckchat/create-drip')
                .send({text: 'I love the Smokies #smoking #'})
                .expect(200, done)
        });
        
        it('should fail to create a drip without a hashtag', function(done) {
            userSession
                .post('/buckchat/create-drip')
                .send({text: 'I love the Smokies'})
                .expect(400, done)
        });

        it('should fail to create a drip having no bucket names specified in hashtag', function(done) {
            userSession
                .post('/buckchat/create-drip')
                .send({text: 'I love the Smokies #'})
                .expect(400, done)
        });

        it('should fail to create a drip with more than 160 characters', function(done) {
            userSession
                .post('/buckchat/create-drip')
                .send({text: 'I love the Smokies1 I love the Smokies2 I love the Smokies3 I love the Smokies4 I love the Smokies5 I love the Smokies6 I love the Smokies7 I love the #Smokies8'})
                .expect(400, done)
        });


        after(function(done) {
            // Remove user doc from database.
            testHelper.removeUserDocs(done);
        });

    });
});
