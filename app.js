var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
var travelRouter = require('./app_server/routes/travel');
var apiRouter = require('./app_api/routes/index'); // API router

const passport = require('passport');



var handlebars =  require('hbs');
//Bring in the database
require('./app_api/models/db');
require('./app_api/config/passport');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));


//handlebars partial
handlebars.registerPartials(__dirname+ '/app_server/views/partials');

app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

// Enable CORS
app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); // Allow requests from the Angular app
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Add PUT and DELETE
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

// wire up routes to controller
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/travel',  travelRouter);
app.use('/api', apiRouter); // Mount the API routes under the '/api' base path


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// catch unauthorized error and create 401
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ message: 'Unauthorized access' });
  } else {
    next(err);
  }
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
