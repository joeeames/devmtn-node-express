var express = require('express'),
    bodyParser = require('body-parser');

var app = express();

/// THIS IS ALL YOU NEED!  (plus love)
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(function(req, res, next) {
  console.log("handling request for " + req.originalUrl);
  next();
}, function(req, res, next) {
  console.log('do something else');
  next();
})

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.type('application/json');
  if(req.query.lang === 'es') {
    res.json({message: 'Hola Mundo'})
  } else {
    res.json({message: 'Hello World'});
  }
})


app.post('/', function(req, res) {
  console.log(req.body);
  console.log(req.body.Age);
  res.json({message: 'Psych Rocks!'});
})

app.listen(8888);