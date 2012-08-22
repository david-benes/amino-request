describe('basic test', function () {
  it('attaches', function () {
    assert.equal(typeof amino.request, 'function');
  });
  
  var server, service;

  it('sets up a service', function (done) {
    server = http.createServer(function (req, res) {
      res.end('cool stuff');
    });
    service = amino.createService('cool-stuff@0.1.0', server);
    service.once('listening', done);
  });

  it('can request the service', function (done) {
    amino.request('cool-stuff@0.1.x', '/', function (err, res, body) {
      assert.ifError(err);
      assert.equal(body, 'cool stuff');
      done();
    });
  });
});