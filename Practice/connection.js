var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017';
var dbName;
console.log(url);
module.exports =  {


      connect(callback){

        MongoClient.connect(url, function(err, db) {

            if (err) {
                // console.log('Unable to connect to the mongoDB server. Error:', err);
                // return;
                callback()
            } else {
                // console.log('Connection established to', url);
                dbName = db
                callback()
                // return;
            } //else

        }); //MongoClient.connect
      },


         getDb(){
            return dbName.db("mydb")
             
        }

    }; //Connection
    console.log("dbname",dbName)

