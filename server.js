const http = require('http');

const httpServer = http.createServer(function(req, res){
	if(req.url === "/")
	{	

		res.writeHead(200, {"Content-Type": "text/html"});
		res.end("<h1>Main Page</h1>");
	}
	else if(req.url === "/puppy")
	{	const puppyimg = "<img src='https://upload.wikimedia.org/wikipedia/commons/6/65/Cute_beagle_puppy_lilly.jpg' width=1011 height=722>";
		res.writeHead(200, {"Content-Type": "text/html"});
		res.end(puppyimg);
	}  else if(req.url === "/kitty"){
		const kittyimg = "<img src='https://upload.wikimedia.org/wikipedia/commons/0/06/Kitten_in_Rizal_Park,_Manila.jpg' width=633 height=950>";
		res.writeHead(200, {"Content-Type": "text/html"});
		res.end(kittyimg);
	} else if(req.url === "/hippo"){
		const hippoimg = "<img src='http://upload.wikimedia.org/wikipedia/commons/2/2e/Mother_and_very_small_baby_hippo.jpg' width=1011 height=758>";
		res.writeHead(200, {"Content-Type": "text/html"});
		res.end(hippoimg);
	} else if(req.url === "/useless"){
		res.writeHead(200, {"Content-Type": "text/plain"});
		res.end("wow, such creativity -_-"); //i'm funny :)
	}
});
httpServer.listen(3000); // change port if need be.

//all images used are licensed under Creative Commons.