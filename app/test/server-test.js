var app, server;
var request = require('supertest');

describe('GET /api/ratio/PLN/123', function(){
  before(function () {
    app = require(__dirname + '/../app.js').app;
    server = require(__dirname + '/../app.js').server;
  });

  it('Check json ratio response', function(done){
    request(app)
      .get('/api/ratio/PLN/EUR')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        done();
      });
  });

  after(function () {
    server.close(function() {
      console.log("Server closed after tests.")
    });
  });
});
