function placeAnOrder(orderNUmber){
    console.log("customer order", orderNUmber);

    cookAndDeliverFood(function(){
        console.log("delivered food order:", orderNUmber);
    })

}

//simulate a 3second operation

function cookAndDeliverFood(callback){
    setTimeOut(callback, 3000);
}

// simulate users web request
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);

var bucky = {
    favFood:
}

// == in javascript compares the values. For ex:
console.log(19 == '19'); //it should print out true

// === in javascript compares but at the same time it looks at the type of the value! if the value type is not the same then it's going to return false
























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
