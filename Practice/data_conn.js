var http = require('http')
var db;
var dbClient;
var dbFunction = require('./mongo')(function (dbName, client) {

  console.log("gggg", dbName)
  db = dbName
  dbClient = client
})
//  dbFunction.connect();

// console.log("hh",dbFunction)
var server = http.createServer(function (req, res) {

  res.writeHead(200, { "Content-Type": "text/html" })
  res.write('hii ')
  console.log("hghhhhhhhh", db)
  
  // var myobj = [{ name: 'kajal', address: 'thane', phone_number: 8086773004 },
  // { name: 'saras', address: 'thane', phone_number: 8086775004 },
  // { name: 'akshata', address: 'vikhroli', phone_number: 8086173004 },
  // { name: 'kajol', address: 'Mulund', phone_number: 8086773024 }];
  // db.collection('users').insertMany(myobj, function (err, result) {
  //   if (err) throw err;
  //   console.log("users is created");
  //   dbClient.close()
  // })
})
server.listen(3000);
