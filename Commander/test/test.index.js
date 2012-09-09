var assert = require('assert');
var sinon = require('sinon');
var handler = require('./../handler.js');
var parser = require('./../parser.js');

it("calls original function with right this and args", function () {
    sinon.spy(handler, 'handle');
    sinon.spy(parser, 'getUrl');
    var index= require("./../Index.js");

    assert(parser.getUrl.calledOnce);
    assert(handler.handle.calledAfter(parser.getUrl));

    handler.handle.restore();
    parser.getUrl.restore();
});
