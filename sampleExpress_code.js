console.log("hello");
// three things
// end-point /api /login
// method  GET,POST,PUT 
// DATA HTTP Protocal // REST API 

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/hello', function (req, res) {
  res.send('Hello to Express!');
});

app.get('/login', function (req, res) {
    res.send('Hello to Express!');
});

app.get('/ab?cd', function(req, res) {
    res.send('ab?cd');
});
    // will match abcd, abbcd, abbbcd, and so on
app.get('/ab+cd', function(req, res) {
    res.send('ab+cd'); //localhost:3000/abbcd
});
    // will match abcd, abxcd, abRABDOMcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {
    res.send('ab*cd');
});
    // will match /abe and /abcde
app.get('/ramya/ab(cd)?e', function(req, res) {
    res.send('ab(cd)?e');
});

app.post('/hello', function (req, res) {
    res.send('Hello to Post Method!');
  });

var server = app.listen(3000, function () {
});