const express = require('express');
const bodyParser = require('body-parser');
const cors  = require('cors');
const logger = require('morgan');
const path = require('path');

//** Initialize express ---------**
const app = express();

//Database middleware initializer

//** Port numbers ---------**
const port = process.env.PORT || 8081;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  //Log requests to server console
// app.use(logger(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
app.use(logger(':remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms'));

//react-production html serving function
// app.use(express.static(path.join(__dirname, 'build')));
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
//   });

//** Endpoints ---------**

//** Server testing endpoints ---------**
app.get('/getTest',function(req,res){
    console.log('req');
    return res.status(200).send(`get test successful`);
});

app.post('/postTest',function(req,res){
    console.log(req);
    return res.status(200).send(`post test successful`);
});

app.put('/putTest',function(req,res){
    console.log(req);
    return res.status(200).send(`put test successful`);
});

app.delete('/delTest',function(req,res){
    console.log('req');
    return res.status(200).send(`del test successful`);
});

app.listen(port,()=>console.log(`Listening on port ${port}`));