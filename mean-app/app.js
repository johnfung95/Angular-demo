//import dependencies and modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

// define the route to run
const router = require('./routes/route');

// connect to mongo db
mongoose.connect('mongodb://localhost:27017/contactlist');
//detect whether or not the mongo db is connected
mongoose.connection.on('connected', () => {
    console.log('Mongo Db connected successfully');
});
// in case the mongo failed to connect
mongoose.connection.on('erorr', (err) => {
    if (err) {
        console.log('Error database connection: ' + err);
    }
});

//define port number
const port = 3000;

// add middleware to pass data
app.use(cors());

// bodyparser
app.use(bodyParser.json());

// use static files
app.use(express.static(path.join(__dirname, 'public')));

//forward all endpoints to the routes file
// define the routes in route.js
app.use('/api', router);

// what to render when connected to the server
app.get('/', (req, res) => {
    if (!err) {
        res.send('foobar');
    } else {
        res.send(err);
    }
});

// listen to port
app.listen(port, () => {
    console.log('Server started at port: ' + port);
});

