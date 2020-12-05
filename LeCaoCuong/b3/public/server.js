const http = require('http');
const fs = require('fs');

var urlmd = require('./urlmodule');

const PORT = 3000;


// const path = require('path');
// const express = require('express');
// const app = express();
// app.use(express.static(__dirname +"/public"));

// app.get('/',function(req,res) {
//     res.sendFile(path.join(__dirname+'/content.html'));
// })

//Xu ly req
function onRequest(request,response){
    //convert url to file name
    var fileName = urlmd.getUrlFileName(request.url);

    response.writeHead (200,{'Content-Type':'text/html'});
    fs.readFile(fileName,null,function(err,datta){
        if(err){
            response.writeHead(404);
            response.write('Page not found!');
        }else{
            response.write(datta);
        }
        response.end();
    })
    // var myReadStream = fs.createReadStream(__dirname + fileName,'utf8');
    // myReadStream.pipe(response);
}



//run server
http.createServer(onRequest).listen(PORT);
