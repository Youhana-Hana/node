var async  = require('async');

var routes = { };

routes.hello = function(req, res) {
  res.send('helloworld');
};

routes.sumallnatural = function(req, res) {
   var number =  parseInt(req.query["n"]);

   	async.nextTick(function() 
	{
		routes.sum(number, res, routes.display);
	});
   
   console.log(number);
};

routes.sum = function(number, res, callback){
	var total = 0;
	
	async.whilst(
	function()
	{
		return number  > 0;
	},
	function(callback)
	{
		total += number;
		number--;
		callback();
		}
	},
	function (err)
	{
	if (err) throw err;
	
	    console.log(total);
		res.send(total.toString());
	}
   );
};
 
routes.display = function() {
	console.log("total number is ");
}; 

module.exports = routes;
