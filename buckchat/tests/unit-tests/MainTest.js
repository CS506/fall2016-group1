var blueprint = require('@onehilltech/blueprint')
  , request   = require('supertest')
  , expect    = require('chai').expect
  , appPath   = require('../fixtures/appPath')
  ;


describe('GeneralApplication', function() {
  before(function(done) {
    blueprint.testing.createApplicationAndStart(appPath, done)
  });

  // We group test cases in multiple levels of "describe" functions
  // simply for good organization. The first argument of each "describe"
  // is simply used as an English description of the test case; it is 
  // not used to execute the test case in any way.
  //
  // The callback function on the "it()" function is what actually 
  // executes the test case.

  /*
   * Route for the root of the application
   *
   */
  describe('/', function() {
    describe('GET', function() {
      it('Should show the intro page with forms', function(done) {
        // Use supertest to make a request and check response.
        request(blueprint.app.server.app)
          .get('/')
          // We're expecting a 200 "ok" HTTP status (if we get another status,
          // this test case will fail).
          .expect(200, done);
      });
    });

    describe('POST', function() {
      it('Should not be able to send post request', function(done) {
        request(blueprint.app.server.app)
          .post('/')
          .expect(404, done);
      });
    });
  });

  /*
   * Route for /login
   *
   */
  describe('/login', function() {
    describe('GET', function() {
      it('Should show the intro page with forms', function(done) {
        request(blueprint.app.server.app)
          .get('/login')
          .expect(200, done);
      });
    });

    describe('POST', function() {
      it('Should fail to log the user in', function(done) {
        request(blueprint.app.server.app)
          .post('/login')
          // Pass form data with the POST request. This mimmicks the user
          // actually filling out and submitting the login form.
          .send({username: '', password: ''})
          // Expect 401 not authorized error
          .expect(401, done)
      });
    });
  });


});