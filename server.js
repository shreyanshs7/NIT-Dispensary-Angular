//Install express server
const express = require('express');
const app = express();
const http = require('http');
const path = require('path');

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname) + '/dist'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });


// Start the app by listening on the default Heroku port
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'));
});

const port = process.env.PORT || '8000';

app.set('port',port);

const server = http.createServer(app);
server.listen(port, ()=> console.log("Running"));