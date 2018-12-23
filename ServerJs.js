const express = require("express");
const app = express();

app.get('/assignment', index);

app.get('/assignment/studentsIndex', studentIndex);

app.get('/assignment/subjectsIndex', subjectsIndex);

app.get('/assignment/marksIndex', marksIndex);

app.listen(3000, () => console.log(`Server Started on port 3000!`))

function index(req, res) {
    res.sendFile('index.html',{ root: __dirname });
}

function studentIndex(req, res) { 
    res.sendFile('students.html',{ root: __dirname });
}

function subjectsIndex(req, res) {
    res.sendFile('subjects.html',{ root: __dirname });
}

function marksIndex(req, res) {
    res.sendFile('marks.html',{ root: __dirname });
}