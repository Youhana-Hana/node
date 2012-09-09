var assert = require('assert')
  , nextPrime = require('./../nextPrime').nextPrime;

describe('nextPrime', function() {
  it('nextPrime should return the next prime number', function() {
    assert.equal(11, nextPrime(7));
  });
  });
