//Install express server
const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const cors = require('cors');
// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname) + '/dist'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

var originsList = [
    'https://nitrr-dispensary.herokuapp.com','http://localhost:4200'
]

app.use(cors({
    origin : function(origin, callback){
        var isWhitelisted = originsList.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
  },
  credentials:true
}));

// Start the app by listening on the default Heroku port
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'dist/index.html'));
});

const port = process.env.PORT || '8000';

app.set('port',port);

const server = http.createServer(app);
server.listen(port, ()=> console.log("Running"));