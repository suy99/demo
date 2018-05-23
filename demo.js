var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World\n');
    response.end();
}).listen(8088);

console.log('Server started');

var fs = require('fs'); 
fs.readFile("view.php",function(error,data)
{
	console.log("Reading Data completed");
});