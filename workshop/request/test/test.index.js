var assert = require('assert');
var sinon = require('sinon');
var handler = require('./../handler.js');
var formatter = require('./../formatter.js');

describe('handler', function(){
  describe('#handle()', function(){

   sinon.spy(handler, 'handle');
   sinon.spy(formatter, 'format');



    it('should save without error', function(done){

	var index= require("./../Index.js");

        if (err) throw err;
        done();

      });
    })
  })
})

