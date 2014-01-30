var express = require('express');
var trades = require('./routes/trades');

var app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    'OPTIONS' === req.method ? res.send(200) : next();
};

app.configure(function () {
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(allowCrossDomain);
});

app.get('/trades', trades.findAll);
app.get('/trades/:id', trades.findById);
app.post('/trades', trades.addTrade);
app.put('/trades/:id', trades.updateTrade);
app.delete('/trades/:id', trades.deleteTrade);

app.listen(3000);
console.log('Listening on port 3000…');
