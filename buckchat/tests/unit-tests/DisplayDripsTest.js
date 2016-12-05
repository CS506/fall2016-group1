var blueprint    = require('@onehilltech/blueprint')
    , request    = require('supertest')
    , session    = require('supertest-session')
    , expect     = require('chai').expect
    , appPath    = require('../fixtures/appPath')
    , testHelper = require('../fixtures/TestHelper.js')
    ;


describe('DisplayDripsTest', function() {

    before(function(done) {
        blueprint.testing.createApplicationAndStart(appPath, done);

    });


    describe('Display Drips', function() {

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

        it('should be robust to display drips even if no drips exist in any bucket', function(done) {
            userSession
                .post('/buckchat/show-drip')
                .send({individualBucketButton: 'noBucket'})
                .expect(200, done)
        });

        it('should succeed in creating a drip', function(done) {
            userSession
                .post('/buckchat/create-drip')
                .send({text: 'TEST: I love the Smokies #hiking #fun'})
                .expect(302, done)
        });

        it('should succeed in creating a drip', function(done) {
            userSession
                .post('/buckchat/create-drip')
                .send({text: 'TEST: I like Colorado #hiking #mountains'})
                .expect(302, done)
        });

        it('should succeed in creating a drip', function(done) {
            userSession
                .post('/buckchat/create-drip')
                .send({text: 'TEST: I love water #ocean #boating #fun #hiking'})
                .expect(302, done)
        });

        it('should be robust to display drips even if no drips exist for given bucket', function(done) {
            userSession
                .post('/buckchat/show-drip')
                .send({individualBucketButton: 'noBucket'})
                .expect(200, done)
        });

        it('should be display drips for a bucket with one drip', function(done) {
            userSession
                .post('/buckchat/show-drip')
                .send({individualBucketButton: 'mountains'})
                .expect(200, done)
        });

        it('should be display drips for a bucket with multiple drips', function(done) {
            userSession
                .post('/buckchat/show-drip')
                .send({individualBucketButton: 'hiking'})
                .expect(200, done)
        });

       

        after(function(done) {
            testHelper.removeDrips();
            // Remove user doc from database.
            testHelper.removeUserDocs(done);
        });

    });
});