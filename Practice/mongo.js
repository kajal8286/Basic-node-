
module.exports = 

     function connect(abc) {
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://127.0.0.1:27017";
         MongoClient.connect(url, function (err, client) {
             var db= client.db('mydb')
            if (err) throw err;
            // db.db('mydb')
           abc(db,client)
            console.log('Connect')
        })
    }



