var parser = require('./parser.js')
var handler = require('./handler.js')
var formatter = require('./formatter.js')

handler.handle(parser.getUrl(), formatter.format);

