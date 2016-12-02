var blueprint    = require('@onehilltech/blueprint')
    , request    = require('supertest')
    , session    = require('supertest-session')
    , expect     = require('chai').expect
    , assert     = require('chai').assert
    , appPath    = require('../fixtures/appPath')
    , User       = require('../../app/models/User.js')
    , testHelper = require('../fixtures/TestHelper.js')
    ;


/*
 * TEST CASES
 *
 * These are the actual test cases. They are logically grouped using "describe" blocks.
 */
describe('GeneralApplication', function() {
    before(function(done) {
        blueprint.testing.createApplicationAndStart(appPath, done);
    });


    // We group test cases in multiple levels of "describe" functions
    // simply for good organization. The first argument of each "describe"
    // is simply used as an English description of the test case; it is 
    // not used to execute the test case in any way.
    //
    // The callback function on the "it()" function is what actually 
    // executes the test case.
    //
    // For help on understanding this testing framework: 
    //   https://www.sitepoint.com/unit-test-javascript-mocha-chai/

    /*
     * Route for the root of the application
     *
     */
    describe('Testing web application root', function() {
        describe('GET', function() {
            // Use the it() function to create a test case. Each test case tests
            // a specific behavior. Concatenate "it" with the description to get 
            // the behavior that is being tested: "it should..."
            it('should show the intro page with forms', function(done) {
                // Use supertest to make a request and check response.
                request(blueprint.app.server.app)
                    .get('/')
                    // We're expecting a 200 "ok" HTTP status (if we get another status,
                    // this test case will fail).
                    .expect(200, done);
            });
        });

        describe('POST', function() {
            it('should not be able to send post request', function(done) {
                request(blueprint.app.server.app)
                    .post('/')
                    .expect(404, done);
            });
        });
    });

    /*
     * Route for /buckchat
     *
     */
    describe('Testing blocker router at route /buckchat', function() {

        // Test that the blocker router redirects the user since not logged in.

        describe('GET', function() {
            it('should redirect to intro page if user not logged in', function(done) {
                request(blueprint.app.server.app)
                    .get('/buckchat/not-a-page')
                    .expect(302, done);
            });
        });

        describe('POST', function() {
            it('should redirect to intro page if user not logged in', function(done) {
                request(blueprint.app.server.app)
                    .post('/buckchat/not-a-page')
                    .expect(302, done);
            });
        });
    });

    /*
     * Route for /login
     *
     */
    describe('Testing Login feature...', function() {
        describe('GET', function() {
            it('should show the intro page with forms', function(done) {
                request(blueprint.app.server.app)
                    .get('/login')
                    .expect(200, done);
            });
        });

        describe('POST - no account yet...', function() {

            // We can have multiple it() test cases within a single describe block.

            it('should fail to login with empty username and empty password', function(done) {
                request(blueprint.app.server.app)
                    .post('/login')
                    // Pass form data with the POST request. This mimics the user
                    // actually filling out and submitting the login form.
                    .send({username: '', password: ''})
                    // Expect 401 not authorized error
                    .expect(401, done)
            });

            it('should fail to login with empty username', function(done) {
                request(blueprint.app.server.app)
                    .post('/login')
                    .send({username: '', password: 'anything'})
                    // Expect 401 not authorized error
                    .expect(401, done)
            });

            it('should fail to login with empty password', function(done) {
                request(blueprint.app.server.app)
                    .post('/login')
                    .send({username: 'anything', password: ''})
                    // Expect 401 not authorized error
                    .expect(401, done)
            });

            it('should fail to login with invalid credentials', function(done) {
                request(blueprint.app.server.app)
                    .post('/login')
                    .send({username: 'NotInTheDatabase', password: 'NotInTheDatabase'})
                    // Expect 401 not authorized error
                    .expect(401, done)
            });
        });


        describe('POST - account created', function() {

            // Session for testing login.
            //
            // Note that neither Blueprint nor supertest provide support for 
            // testing sessions. I must test those using supertest-session.

            var loginSession = null;

            before(function(done) {
                // Initialize session (using supertest-session) for testing login.
                loginSession = session(blueprint.app.server.app);
                // Insert test doc into the database.
                testHelper.insertUserDocs(done);
            });

            it('should fail to login with valid username but invalid password', function(done) {
                loginSession
                    .post('/login')
                    .send({username: 'jjj', password: 'notCorrectPassword'})
                    .expect(401, done)
            });

            it('should succeed in logging in with valid credentials', function(done) {
                loginSession
                    .post('/login')
                    .send({username: 'jjj', password: 'mypass'})
                    .expect(302, done)
            });

            it('should be able to visit /buckchat/home once logged in', function(done) {
                loginSession
                    .get('/buckchat/home')
                    .expect(200, done);
            });

            it('should not be able to access non-existing page under /buckchat when logged in', function(done) {
                // When logged out, the following request would give a 302 status.
                loginSession
                    .get('/buckchat/not-a-page')
                    .expect(404, done);
            });

            it('should redirect to home page when accessing / when logged in', function(done) {
                loginSession
                    .get('/')
                    .expect(302, done);
            });

            it('should redirect to home page when accessing /login when logged in', function(done) {
                loginSession
                    .get('/login')
                    .expect(302, done);
            });

            it('should redirect to home page when accessing /register when logged in', function(done) {
                loginSession
                    .get('/register')
                    .expect(302, done);
            });


            describe('Logout', function() {

                it('should succeed to log the user out', function(done) {
                    loginSession
                        .get('/logout')
                        // Expect a 302 Found status since logout() redirects to the root of the site
                        .expect(302, done);
                });

                it('should redirect to intro page when requesting page under /buckchat when logged out', function(done) {
                    loginSession
                        .get('/buckchat/not-a-page')
                        .expect(302, done);
                });
            });

            // Remove all test docs inserted into the database.
            after(testHelper.removeUserDocs);
        });
    });

    /*
     * Route for /register
     * 
     */
    describe('Testing register feature', function() {

        // Insert test doc into the database.
        before(testHelper.insertUserDocs);

        describe('POST', function() {
            it('should create an account if all user data is valid', function(done) {
                request(blueprint.app.server.app)
                    .post('/register')
                    .send({name: 'raghavendran', email: 'raghav4494@gmail.com', username: 'raghav4494', password: 'qwerty123'})
                    .expect(200, done);
            });
        });

        describe('POST - not registered...', function() {

            // We can have multiple it() test cases within a single describe block.

            it('should fail to register with empty form values', function(done) {
                request(blueprint.app.server.app)
                    .post('/register')
                    .send({username: '', password: '', email: '', name: ''})
                    // Expect 400 - conflict with model design
                    .expect(400, done)
            });

            it('should fail to register with empty username', function(done) {
                request(blueprint.app.server.app)
                    .post('/register')
                    .send({username: '', password: 'qwerty123', email: 'raghav44945@gmail.com', name: 'raghavendran'})
                    // Expect 400 - conflict with model design
                    .expect(400, done)
            });

            it('should fail to register with empty password', function(done) {
                request(blueprint.app.server.app)
                    .post('/register')
                    .send({username: 'raghav44945', password: '', email: 'raghav44945@gmail.com', name: 'raghavendran'})
                    // Expect 400 - conflict with model design
                    .expect(400, done)
            });

            it('should fail to register with empty name', function(done) {
                request(blueprint.app.server.app)
                    .post('/register')
                    .send({username: 'raghav44945', password: 'qwerty123', email: 'raghav44945@gmail.com', name: ''})
                    // Expect 400 - conflict with model design
                    .expect(400, done)
            });

            it('should fail to register with empty email', function(done) {
                request(blueprint.app.server.app)
                    .post('/register')
                    .send({username: 'raghav44945', password: 'qwerty123', email: '', name: 'raghavendran'})
                    // Expect 400 - conflict with model design
                    .expect(400, done)
            });
        });

        describe('POST - not successfull...', function() {

            it('should fail to register with already existing username', function(done) {
                request(blueprint.app.server.app)
                    .post('/register')
                    .send({username: 'jjj', email: 'abcd@gmail.com', name: 'raghavendran', password: 'qwerty123'})
                    // Expect 409 - User exists already
                    .expect(409, done)
            });

            it('should fail to register with already existing email id', function(done) {
                request(blueprint.app.server.app)
                    .post('/register')
                    .send({username: 'abcd', email: 'j@gmail.com', name: 'raghavendran', password: 'qwerty123'})
                    // Expect 409 - User exists already
                    .expect(409, done)
            });

            it('should fail to register with already existing username and email id', function(done) {
                request(blueprint.app.server.app)
                    .post('/register')
                    .send({username: 'jjj', email: 'j@gmail.com', name: 'raghavendran', password: 'qwerty123'})
                    // Expect 409 - User exists already
                    .expect(409, done)
            });
        });

        describe('POST - validation issues...', function() {

            // We can have multiple it() test cases within a single describe block.

            it('should fail to register with password less than 6 characters', function(done) {
                request(blueprint.app.server.app)
                    .post('/register')
                    .send({username: 'raghav44945', password: 'ragh', email: 'raghav44945@gmail.com', name: 'Raghavendran'})
                    // Expect 400 - schema attribute's properties are not met
                    .expect(400, done)
            });

            it('should fail to register with password more than 12 characters', function(done) {
                request(blueprint.app.server.app)
                    .post('/register')
                    .send({username: 'raghav44945', password: 'raghavendran4494', email: 'raghav44945@gmail.com', name: 'Raghavendran'})
                    // Expect 400 - schema attribute's properties are not met
                    .expect(400, done)
            });

            it('should fail to register with username less than 3 characters', function(done) {
                request(blueprint.app.server.app)
                    .post('/register')
                    .send({username: 'ra', password: 'raghav4494', email: 'raghav44945@gmail.com', name: 'Raghavendran'})
                    // Expect 400 - schema attribute's properties are not met
                    .expect(400, done)
            });

            it('should fail to register with username more than 15 characters', function(done) {
                request(blueprint.app.server.app)
                    .post('/register')
                    .send({username: 'raghavendran4494', password: 'raghav4494', email: 'raghav44945@gmail.com', name: 'Raghavendran'})
                    // Expect 400 - schema attribute's properties are not met
                    .expect(400, done)
            });
            it('should fail to register with name more than 30 characters', function(done) {
                request(blueprint.app.server.app)
                    .post('/register')
                    .send({username: 'raghav44945', password: 'raghav4494', email: 'raghav44945@gmail.com', name: 'RaghavendranRaghavendranRaghavendran'})
                    // Expect 400 - schema attribute's properties are not met
                    .expect(400, done)
            });

        });

        // Remove all test docs inserted into the database (with name 'raghavendran','joe').
        after(testHelper.removeUserDocs);

    });

});
