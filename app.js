var express = require('express');
var sassMiddleware = require('node-sass-middleware');
var path = require('path');
var http = require('http');

var app = express();

app.set('view engine', 'pug');

app.use(sassMiddleware({
    /* Options */
    src: path.join(__dirname, 'styles'),
    dest: path.join(__dirname, 'public'),
    debug: true,
    outputStyle: 'compressed',
    prefix:  '/public'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/> 
}));
// Note: you must place sass-middleware *before* `express.static` or else it will 
// not work. 
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('index')
})

http.createServer(app).listen(8000);
