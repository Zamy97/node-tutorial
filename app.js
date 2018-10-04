const http = require('http');

function oneRequest(request, response){
    console.log("a user made a request" + request.url);
    response.writeH (200, {"Context-Type": "text/plain"
    response.write("Here's some data that you requested");
    response.end();

http.createServer(oneRequest).listen(4000);
console.log("server is now running........");
 






















// const http = require('http');
// const fs = require('fs');
// const hostname = '127.0.0.1';
// const port = 3000;
//
// fs.readFile('index.html', (err, html) => {
//     if(err){
//         throw err;
//     }
//
//
//     const server = http.createServer((req, res) => {
//         res.statusCode = 200;
//         res.setHeader('content-type', 'text/html');
//         res.write(html);
//         res.end();
//     });
//
//     server.listen(port, hostname, () => {
//
//         console.log('server started on port '+port);
//     });
// });
