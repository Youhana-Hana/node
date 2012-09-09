var parser = require('./parser.js')
var handler = require('./handler.js')

handler.handle(parser.getUrl());
