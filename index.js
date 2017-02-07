// Express JS Assignment - Rick Baker

var express = require('express');
var fs = require('fs');
var ejs = require('ejs');
var app = express();

app.get('/', function(request, response) {
    //response.sendFile(__dirname + '/index.html');
    fs.readFile('courses.json', 'utf8', function(err, data) {
    var courses = JSON.parse(data);
    response.locals = {courses: courses};
    response.render('index.ejs');
    });
    
});
app.get('/courses', function(request, response) {
    fs.readFile('courses.json', 'utf8', function(err, data) {
    var courses = JSON.parse(data);
    response.locals = {courses: courses};
    response.render('courses.ejs');
    });
});

app.get('/courses/:id', function(request, response) {
    fs.readFile('courses.json', 'utf8', function(err, data) {
    var coursesParsed = JSON.parse(data);
    var course = coursesParsed.filter( function(obj) {
        return obj.id === parseInt(request.params.id);
    })[0];

    response.locals = {course: course};
    response.render('course.ejs');
    });
});

app.get('/contacts', function(request, response) {
    response.sendFile(__dirname + '/contacts.html');
});
app.listen(8000);

