var blueprint = require('@onehilltech/blueprint')
  , request   = require('supertest')
  , expect    = require('chai').expect
  , assert    = require('chai').assert
  , appPath   = require('../fixtures/appPath')
  , User      = require('../../app/models/User.js')
  ;


/*
 * HELPER FUNCTIONS
 * 
 * These are helper functions below that involve cleanup work with the database.
 * Your test cases may call these functions before/after test cases as needed.
 */
function insertUserDoc(done) {
  // Insert a test user document in the database.
  var user = new User({name: 'joe', email: 'j@gmail.com', username: 'jjj', password: 'mypass'});
  user.save(function() {
    done();
  });
}

function removeUserDocs(done) {
  // Remove all test user documents in the database.
  User.find({name: 'joe'}).remove(function(err) {
    done();
  });
}

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


      before(function(done) {
        insertUserDoc(done);
      });


      it('should succeed in logging in', function(done) {
        request(blueprint.app.server.app)
          .post('/login')
          .send({username: 'jjj', password: 'mypass'})
          .expect(200, done)
      });

      it('should be able to visit /buckchat/welcome once logged in');

      after(removeUserDocs);

    });
  });

  /*
   * Route for /register
   * 
   */
  describe('Testing register feature', function() {
    describe('POST', function() {
      it('should create an account if all user data is valid', function(done) {
        request(blueprint.app.server.app)
          .get('/register')
          .send({name: 'joe', email: 'j@gmail.com', username: 'jjj', password: 'mypass'})
          .expect(200, done);
      });
    });

    // Remove all test docs inserted into the database (with name 'joe').
    after(removeUserDocs);

  });

});