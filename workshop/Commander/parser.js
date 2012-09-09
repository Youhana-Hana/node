var program = require('commander');

program
  .version('0.0.1')
  .option('--url <url>', 'display this url')
  .parse(process.argv);

function getUrl() {
	return program.url
};

exports.getUrl = getUrl;



