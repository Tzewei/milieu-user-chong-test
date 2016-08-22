var app = require('../app');
var request = require("request");
var supertest = require("supertest");
var base_url = "http://localhost:9000/";
var about_url = base_url + 'about';
var contact_url = base_url + 'contact';



describe(" Milieu Server API", function() {
  describe("should return details json on get /users", function() {
      it("returns status code 200", function(done) {
        supertest(app)
          .get('/users')
          .expect('Content-Type', /json/)
          .expect(200, done);
          done();
      });

      // it("returns a correct json format", function(done) {
      //   supertest(app)
      //     .get('/users')
      //     .expect({
      //  <PUT YOUR SCHEMA HERE>
      //           }, done);
      //           done();
      // });
    });
});
  describe("should return information json on get /surveys", function() {
      it("returns status code 200", function(done) {
        supertest(app)
          .get('/surveys')
          .expect('Content-Type', /json/)
          .expect(200, done);
          done();
      });

  //     it("returns a correct json format", function(done) {
  //       supertest(app)
  //         .get('/portfolios')
  //         .expect([
  //          <PUT YOUR SCHEMA HERE>
  //         ], done);
  //         done();
  //     });
  // });
});

describe("Express Server Front end", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      supertest(app)
      .get('/')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200, done); // note that we're passing the done as parameter to the expect
      done();
    });
  });

    describe("GET /about", function() {
      it("returns status code 200", function(done) {
        supertest(app)
        .get('/about')
        .set('Accept', 'text/html')
        .expect('Content-Type', /html/)
        .expect(200, done); // note that we're passing the done as parameter to the expect
        done();
      });
    });

      describe("GET /contact", function() {
        it("returns status code 200", function(done) {
          supertest(app)
          .get('/contact')
          .set('Accept', 'text/html')
          .expect('Content-Type', /html/)
          .expect(200, done); // note that we're passing the done as parameter to the expect
          done();
        });
      });

});
