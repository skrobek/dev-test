var express = require('express');

var app = express(),
    port = process.env.PORT || 3000,
    ratio = require('./routes/ratio');


app.use('/api', ratio);

var server = app.listen(port);
console.log('App running on port ' + port);

module.exports.app = app;
module.exports.server = server;
