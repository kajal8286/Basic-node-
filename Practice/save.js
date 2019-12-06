var http = require('http')
var save_data = require('./save_conn')
var bodyParser = require('body-parser')
var par = bodyParser.urlencoded({ extended: false })

http.createServer(function (req, res) {
    if (req.url == '/' && req.method == 'GET') {
        res.write("Hello")
        res.end()
    }
    else if (req.url == '/users' && req.method == 'POST') {
        save_data.saveall(function (result) {
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.stringify(result))
            res.end()
        })
    }
    else if (req.url == '/users/saveOne' && req.method == 'POST') {
        req.on('data', function (chunk) {
            save_data.saveone(chunk.toString(), function (result) {
                res.setHeader('Content-Type', 'application/json')
                res.write(JSON.stringify(result))
                res.end()


            })

        });
    }
    else if (req.url == '/users/' && req.method == 'GET') {
        save_data.search(function (result) {
            //console.log("result",save_data)
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.stringify(result))
            res.end()
        })
    }
    else if (req.url == '/users/finduser' && req.method == 'GET') {
       req.on('data', function (chunk) {
           save_data.finduser(chunk.toString(), function (result) {
          //  console.log("aaa",save_data)
            res.setHeader('Content-Type', 'application/json')
            res.write(JSON.stringify(result))
            res.end()
            })
        })
        


    }

    else {
        res.write('page not found')
        res.end()
    }

}).listen(3000)


