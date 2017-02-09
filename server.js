var express = require('express');
var app = express();

//port definition
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));

//server starting
var server = app.listen(app.get('port'), function() {
	var port = server.address().port;
	console.log('Express server listening on port %s', port);
})