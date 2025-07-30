// express.js is one library
//localhost is ip of current machine
var express=require('express');
var app=express();

var port=8080; //default http unsecured server port num

app.use(express.static('frontend')); //when static file is requested, find in public folder

app.listen(port,function(){
    console.log('Server is running on http://localhost:'+port);
})