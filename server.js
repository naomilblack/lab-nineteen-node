var http = require('http');
var random = require('./random');

console.log(random);

http.createServer(function(reuest, response){
  response.writeHead(200,{"Content-type":"text/plain"});
  response.write("Your daily affimation: " + random.affirmations[Math.floor(Math.random()* random.affirmations.length)] + "");
  response.end();
}).listen(8888);
