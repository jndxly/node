let express = require('express');
let app = express();

app.get('/', function(req, res){
    res.send('hello world')
})

let server = app.listen(8081, function(){
    let host = server.address().address;
    let port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})