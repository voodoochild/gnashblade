var mongo = require('mongodb');

// var Server = mongo.Server,
//     Db = mongo.Db,
//     BSON = mongo.BSONPure;

// var server = new Server('mythlan.co.uk', 27017, {auto_reconnect: true});
// var db = new Db('gw2db', server);

// db.open(function(err, db) {
//     if (!err) {
//         console.log('Connected to the database');
//         db.collection('trades', {strict: true}, function(err) {
//             if (err) {
//                 console.log('Collection does not exist');
//             }
//         });
//     }
// });

var MongoClient = require('mongodb').MongoClient;

  MongoClient.connect('mongodb://mythlan.co.uk:27017/test', function(err, db) {
    if(err) throw err;

    var collection = db.collection('test_insert');
    collection.insert({a:2}, function(err, docs) {

      collection.count(function(err, count) {
        console.log("count = "+ count);
      });

      // Locate all the entries using find
      collection.find().toArray(function(err, results) {
        console.dir(results);
        // Let's close the db
        db.close();
      });
    });
  });

exports.findAll = function(req, res) {
    res.send('');
};

exports.findById = function(req, res) {
    res.send('');
};

exports.addTrade = function(req, res) {
    res.send('');
};

exports.updateTrade = function(req, res) {
    res.send('');
};

// exports.findAll = function(req, res) {
//     db.collection('trades', function(err, collection) {
//         collection.find().toArray(function(err, items) {
//             res.send(items);
//         });
//     });
// };

// exports.findById = function(req, res) {
//     res.send({
//         _id: req.params.id,
//         itemId: 37723,
//         created: '1391003697821',
//         owner: 'kriss', // 'kriss' or 'simon'
//         log: [
//             {action: 'ordered', quantity: 10, value: 8.2, created: '1391003697821', total: null},
//             {action: 'bought', quantity: 8, value: 8.2, created: '1391003697821', total: -65.6},
//             {action: 'listed', quantity: 8, value: 16.0, created: '1391003697821', total: -6.4},
//             {action: 'sold', quantity: 4, value: 16.0, created: '1391003697821', total: 57.6}
//         ],
//         ordered: 10,
//         bought: 8,
//         listed: 4,
//         sold: 4,
//         balance: -14.4,
//         archived: false
//     });
// };
