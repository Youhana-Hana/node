var assert = require('assert');
var sinon = require('sinon');
var server = require('./../server');

it("calls original function with right this and args", function () {
    sinon.spy(server, 'start');
    var index= require("./../Index.js");
    assert(server.start.calledOnce);
    server.start.restore();	
});
