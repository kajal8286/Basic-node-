var http = require ('http');
var Mongoclient = require('mongodb').MongoClient
var url = "mongodb://127.0.0.1:27017";

Mongoclient.connect(url,function(err,client){
    var emp = client.db('employee')
    if (err) throw err;
    console.log("connect")

})