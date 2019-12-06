var db;
var dbClient;
var request = require('request')
var dbFunction = require('./mongo')(function (dbName, client) {
    // console.log("gggg", dbName)
    db = dbName
    dbClient = client
})

module.exports = {

    saveall: function (callback) {
        var myobj = [{ name: 'kajal', address: 'thane', phone_number: 8086773004 },
        { name: 'saras', address: 'thane', phone_number: 8086775004 },
        { name: 'akshata', address: 'vikhroli', phone_number: 8086173004 },
        { name: 'kajol', address: 'Mulund', phone_number: 8086773024 }];

        db.collection('users').insertMany(myobj, function (err, result) {
            if (err) throw err;
            callback(result)
            console.log("users is created");
            dbClient.close()
        })
    },
    saveone: function (user_data, callback) {
        console.log("user_data", JSON.parse(user_data))
        db.collection('users').insertOne(JSON.parse(user_data), function (err, result) {
            if (err) {
                callback(err)
            }
            callback(result)
            console.log("users is created");

        })
    },
    search: function (callback) {
        db.collection('users').findOne({}, function (err, result) {
            if (err) throw err;
            callback(result.name)
            // dbClient.close();
        });
    },


    finduser: function (data, callback) {
        console.log(typeof JSON.parse(data))
        let uData = JSON.parse(data)
        db.collection('users').find({ name: uData.name }).toArray(function (err, result) {
            console.log("err", err, result)
            if (err) throw err;
            console.log("r.......", result)
            callback(result)



        })

    }
}

