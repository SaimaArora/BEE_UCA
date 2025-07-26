// express.js is one library
var express=require('express');
var app=express();

var port=8080; //default unsecured server port num

app.use(express.static('public')); //when static file is requested, find in public folder

app.listen(port,function(){
    console.log('Server is running on http://localhost:'+port);
})