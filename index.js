import express from 'express';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-parser';

var app = express();

app.get('/student/:studentId', function(req, res) {
  console.log(req.params);
  console.log(req.params.studentId);

   res.send("Path parameters have been printed to console");
});

app.use(cookieParser());

app.get('/login', function (req,res) {
  let name = req.query.name || 'this is a test';
  res.cookie('name', name);
  res.send(`Cookie name value: ${name}`)
})

app.get('/hello', function (req,res){
  let name = req.cookies.name;
  res.send(`Welcome ${name}!`);
})

app.listen(8080);