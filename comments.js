// Create web server with node.js and express.js
// Run with: node comments.js
// Access with: http://localhost:8080/comments
// Access with: http://localhost:8080/comments/1
// Access with: http://localhost:8080/comments/2

var express = require('express');
var app = express();

var comments = [
    { name: 'John', comment: 'Hello' },
    { name: 'Mary', comment: 'Hi' },
    { name: 'Sue', comment: 'Goodbye' }
];

app.get('/comments', function(req, res) {
    res.send(comments);
});

app.get('/comments/:id', function(req, res) {
    var id = req.params.id;
    res.send(comments[id]);
});

app.listen(8080);
console.log('Listening on port 8080');