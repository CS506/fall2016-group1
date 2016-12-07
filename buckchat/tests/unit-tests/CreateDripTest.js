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


        it('should succeed in logging in', function(done) {
            userSession
                .post('/login')
                .send({username: 'jjj', password: 'mypass'})
                .expect(302, done)
        });

        it('should succeed in creating a drip', function(done) {
            userSession
                .post('/buckchat/create-drip')
                .send({text: 'TEST: I love the Smokies #hiking', anonymous: 'false'})
                .expect(302)
                .expect('Location', 'home', done)
        });

        it('should succeed in creating an anonymous drip', function(done) {
            userSession
                .post('/buckchat/create-drip')
                .send({text: 'TEST: I love the Smokies #hiking', anonymous: 'true'})
                .expect(302)
                .expect('Location', 'home', done)
        });

        it('should succeed in creating a drip and save in multiple buckets', function(done) {
            userSession
                .post('/buckchat/create-drip')
                .send({text: 'TEST: I love the Smokies #hiking #playing'})
                .expect(302)
                .expect('Location', 'home', done)
        });

        it('should succeed in creating a drip if there is a hashtag followed by a valid bucket name and empty hashtag', function(done) {
            userSession
                .post('/buckchat/create-drip')
                .send({text: 'TEST: I love the Smokies #smoking #'})
                .expect(302)
                .expect('Location', 'home', done)
        });
        
        it('should fail to create a drip without a hashtag', function(done) {
            userSession
                .post('/buckchat/create-drip')
                .send({text: 'TEST: I love the Smokies'})
                .expect(302)
                .expect('Location', 'home', done)
        });

        it('should fail to create a drip having no bucket names specified in hashtag', function(done) {
            userSession
                .post('/buckchat/create-drip')
                .send({text: 'TEST: I love the Smokies #'})
                .expect(302)
                .expect('Location', 'home', done)
        });

        it('should fail to create a drip with 161 characters', function(done) {
            userSession
                .post('/buckchat/create-drip')
                .send({text: 'TEST: This is 161 characters #long. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat accumsan purus at hendrerit. Nullam suscipit, mi at aliq'})
                .expect(302)
                .expect('Location', 'home', done)
        });

        it('should succeed in creating a drip with 160 characters', function(done) {
            userSession
                .post('/buckchat/create-drip')
                .send({text: 'TEST: This is 160 characters #long. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat accumsan purus at hendrerit. Nullam suscipit, mi at ali'})
                .expect(302)
                .expect('Location', 'home', done)
        });


        after(function(done) {
            testHelper.removeDrips();
            // Remove user doc from database.
            testHelper.removeUserDocs(done);
        });

    });
});
