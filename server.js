var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');

var app = express();
var routes = require('./server/routes/addtheatreroute');
var search = require('./server/routes/searchmovieroute');
var port = 4000;

//databaseconnection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/data/db/movie');

  //data connection check
  mongoose.connection.on('connected', function(){
    console.log('sucessfully connected to database');
  });
  mongoose.connection.on('error', function(err){
    if(err){
      console.log('Error occuried while establishing connection to database' + err);
    }
  });
//uses of modules
// app.use('/', function(req, res){
// res.render('time is good');
// })
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'client')));
app.use('/api', routes);
app.use('/new', search);

//Server connection
app.listen(port, function(){
  console.log('server is running on port:' + port);
});
