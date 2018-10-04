var pocPeople = {

    firstName: "Andrea"
    lastName: "Pelayo"
    age: 20
};

console.log(pocPeople);

// What this next line will do is it'll add those two numbers together! Also remember how the function takes in parameters that will be added and return the value.

function addNumbers(a,b){

    return a+b;
}

console.log(addNumbers(7,5));

// Any function without return 

function andreaPelayo(){

}
console.log(andreaPelayo);





























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
