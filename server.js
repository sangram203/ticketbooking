var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');
var ejs = require('ejs');
var app = express();
var routes = require('./server/routes/addtheatreroute');
var search = require('./server/routes/searchmovieroute');
var mapmovie = require('./server/routes/mapnewmovierouter');
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

app.use(bodyParser.json());
app.use(cors());
app.set ('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'client')));
app.get('/adminpanel', function(req, res){
  res.sendFile(__dirname + '/client/adminpanel.html');
});
app.use('/api', routes);
app.use('/new', search);
app.use('/map', mapmovie);
//Server connection
app.listen(port, function(){
  console.log('server is running on port:' + port);
});
