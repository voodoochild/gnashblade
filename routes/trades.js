var mongo = require('mongodb');
var db;

var client = new mongo.MongoClient(new mongo.Server('localhost', 27017));
client.open(function(err, client) {
    db = client.db('gnashblade');
});

exports.findAll = function(req, res) {
    db.collection('trades', function(err, collection) {
        collection.find().toArray(function(err, result) {
            if (!err) {
                res.json(result);
            }
        });
    });
};

exports.findById = function(req, res) {
    var id = req.params.id;
    db.collection('trades', function(err, collection) {
        collection.findOne({'_id': new mongo.ObjectID(id)}, function(err, result) {
            if (!err) {
                res.json(result);
            }
        });
    });
};

exports.addTrade = function(req, res) {
    var trade = req.body;
    db.collection('trades', function(err, collection) {
        collection.insert(trade, {safe: true}, function(err, result) {
            if (!err) {
                res.json(result[0]);
            }
        });
    });
};

exports.updateTrade = function(req, res) {
    var id = req.params.id;
    var trade = req.body;
    db.collection('trades', function(err, collection) {
        collection.update({'_id': new mongo.ObjectID(id)}, trade, {safe: true}, function(err) {
            if (!err) {
                res.json({status: 'done'});
            }
        });
    });
};

exports.deleteTrade = function(req, res) {
    var id = req.params.id;
    db.collection('trades', function(err, collection) {
        collection.remove({'_id': new mongo.ObjectID(id)}, {safe: true}, function(err) {
            if (!err) {
                res.json({status: 'done'});
            }
        });
    });
};
