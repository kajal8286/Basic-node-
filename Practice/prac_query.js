var http =require('http')
var dbFunction = require('./mongo')(function (dbName, client) {
    // console.log("gggg", dbName)
    db = dbName
    dbClient = client
   var myquery ={ name:"test7"}
  //var query = {address: /^V/}
  db.collection("users").deleteOne(myquery,function(err, result) {
    if (err) throw err;
    console.log(result);
   // db.close(); 
  });
});