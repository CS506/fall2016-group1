var blueprint = require('@onehilltech/blueprint')
  , request   = require('supertest')
  , expect    = require('chai').expect
  , appPath   = require('../fixtures/appPath')
  ;


describe('GeneralApplication', function() {
  before(function(done) {
    blueprint.testing.createApplicationAndStart(appPath, done)
  });

  // Route for the root of the application
  describe('/', function() {
    describe('GET', function() {
      it('should show the intro page with forms', function(done) {
        // Use supertest to make a request and check response.
        request(blueprint.app.server.app)
          .get('/')
          .expect(200, done);
      });
    }),

    describe('POST', function() {
      it('should not be able to send post request', function(done) {
        request(blueprint.app.server.app)
          .post('/')
          .expect(404, done);
      });
    });

  });
});