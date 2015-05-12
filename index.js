var express = require('express');
var url = require('url');
var app = express();

app.use(function(req, res, next){
	var query = url.parse(req.url, true).query;
	var latex = query.eq.replace(/\//g, '\\');
	var dpi   = query.dpi ? parseInt(query.dpi) : 425;
	//console.log("e^{i \\pi} = -1", latex, query);
	console.log("dpi:", dpi, "latex:", latex);
	
	res.set('Content-Type', 'image/png');
	require("mathmode")(latex,{'dpi':dpi}).pipe(res);
});

app.listen(4000);
