var assert = require('assert');

describe('test main api', function() {
  var couchbase;
  it('should connect to couchbase', function(done) {
    require('./connector')().then(function(api) {
      couchbase = api;
      done();
    }).done();
  });
});