var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write('<h1>Orders</h1>');
    response.write('<ul>');
    response.write('<li>Order 1</li>');
    response.write('<li>Order 2</li>');
    response.write('<li>Order 3</li>');
    response.write('</ul>');
    response.end();
}).listen(9700);