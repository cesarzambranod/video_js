const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const cors = require('cors');

app.use(cors())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use(express.static(__dirname + '/'));
//Store all JS and CSS in Scripts folder.

app.use('/', router);
app.listen(process.env.port || 4500);

console.log('Running at Port 4500');

