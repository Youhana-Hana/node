var assert = require('assert');
var sinon = require('sinon');
var handler = require('./../handler');

it("calls original function with right this and args", function () {
    sinon.spy(console, 'log');
    handler.handle('TEST')
    assert(console.log.calledOnce);
    assert(console.log.calledWith('TEST'));
    console.log.restore();
});
