var http = require('http')


http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  // MongoClient.connect(url, function(err, db) {
  //   if (err)  throw err;
  //console.log("db", db)
  //var dbase = connection.db("mydb")
  var myobj = [{ name: 'kajal', address: 'thane', phone_number: 8086773004 },
  { name: 'saras', address: 'thane', phone_number: 8086775004 },
  { name: 'akshata', address: 'vikhroli', phone_number: 8086173004 },
  { name: 'kajol', address: 'Mulund', phone_number: 8086773024 }];
  db.collection('users').insertMany(myobj, function (err, result) {
    if (err) throw err;
    console.log("users is created");
    res.write('Users is created')
    //db.close();
  })

  //})
}).listen(3000)
