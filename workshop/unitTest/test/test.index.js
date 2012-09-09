var assert = require('assert');
var sinon = require('sinon');
var nextPrime = require('./../nextPrime');

it("calls original function with right this and args", function () {
    sinon.spy(console, 'log');
    sinon.spy(nextPrime, 'nextPrime');
    var index= require("./../Index.js");
    assert(console.log.calledOnce);
    assert(nextPrime.nextPrime.calledOnce);
    assert(nextPrime.nextPrime.calledWith(10));
    console.log.restore();
    nextPrime.nextPrime.restore();	
});
