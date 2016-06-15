var express = require('express');
var path = require('path');
var http = require('http');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();




//template engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('view cache', false);

//dev proccess
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//middlware route
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('connect-livereload')());
//routes
app.use('/', require('./routes/index'));

//404 error
app.use(function(req, res, next) {
	var err = new Error('Not Found');
  	err.status = 404;
  	next(err);
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
